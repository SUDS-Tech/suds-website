/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */


import { AppDataSource } from "../config/db";
import { Contact, ContactStatus, PriorityLevel } from "../entities/Contact.entity";
import { AuditLog } from "../entities/AuditLog.entity";
import { CreateContactDto } from "../dto/create-contact.dto";
import { SecurityService } from "./secruity-service";
import {NotificationService} from './notification-service';

export class ContactService{
    private readonly contactRepository = AppDataSource.getRepository(Contact);
    private readonly auditLogRepository = AppDataSource.getRepository(AuditLog);
    private readonly securityService = new SecurityService();
    private readonly notificationService = new NotificationService();

    async createContact(dto: CreateContactDto, metadata: {
        ipaddress?: string;
        userAgent?: string;
        referrer?: string;
    }): Promise<Contact>{
        const sanitizedData = {
            ...dto,
            fullName: this.securityService.sanitizeInput(dto.fullName),
            email: this.securityService.sanitizeEmail(dto.email),
            message: this.securityService.sanitizeInput(dto.message),
            subject: dto.subject ? this.securityService.sanitizeInput(dto.subject) : undefined,
        };

        const spamScore = this.securityService.calculateSpamScore(dto);

        const priority = this.determinePriority(dto);

        const contact = this.contactRepository.create({
            ...sanitizedData,
            ...metadata,
            spamScore,
            priority,
            verificationToken: this.securityService.generateVerificationToken()
        });

        const savedContact = await this.contactRepository.save(contact);
        await this.createAuditLog(savedContact.id, 'CREATED', "SYSTEM", {
            type: savedContact.type,
            email: savedContact.email
        })

        await this.notificationService.sendNotification(savedContact);

        return savedContact;
    }

    private determinePriority(dto: CreateContactDto): PriorityLevel{
        const urgentKeywords = ['urgent','asap','emergency','critical','immediate'];
        const highKeywords = ['important','priority','soon'];

        const content = `${dto.subject || ''} ${dto.message}`.toLowerCase();

        if(urgentKeywords.some((keyword) => content.includes(keyword))) return PriorityLevel.URGENT;
        if(highKeywords.some((keyword) => content.includes(keyword))) return PriorityLevel.HIGH;
        return PriorityLevel.MEDIUM;
    }

    async getContacts(filters?: {
        status?: string;
        type?:string;
        page?: number;
        limit?: number;
    }): Promise<{contacts: Contact[], total: number; page: number; totalPages: number}>{
        const page = filters?.page || 1;
        const limit = filters?.limit || 20;
        const skip = (page - 1) * limit;

        const queryBuilder =this.contactRepository.createQueryBuilder('contact');

        if(filters?.status) queryBuilder.andWhere('contact.status = :status', {status: filters.status});
        if(filters?.type) queryBuilder.andWhere('contact.type = :type', {type: filters.type});

        queryBuilder.orderBy('contact.createdAt', 'DESC').skip(skip).take(limit);

        const [contacts, total] = await queryBuilder.getManyAndCount();

        return {
            contacts,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        }
    }

    async updateContactStatus(id: string, status: ContactStatus, changedBy: string): Promise<Contact>{
        const contact = await this.contactRepository.findOne({where: {id}});

        if(!contact) throw new Error('Contact not found');
        
        const oldStatus = contact.status;
        contact.status = status;

        if(status === ContactStatus.RESPONDED){
            contact.respondedAt = new Date();
        }

        const updatedContact = await this.contactRepository.save(contact);

        await this.createAuditLog(id, 'STATUS_UPDATED', changedBy, {
             oldStatus,
             newstatus: status
        });

        return updatedContact;
    }

    private async createAuditLog(contactId:string, action: string, changedBy: string, changes?: Record<string, any>): Promise<void>{
        const  auditLog = this.auditLogRepository.create({
            contactId,
            action,
            changedBy,
            changes
        });
        await this.auditLogRepository.save(auditLog);
    }
}

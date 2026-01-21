/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */

import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import { Contact } from './Contact.entity';

@Entity('contact_audit_logs')
export class AuditLog{
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({type: 'uuid'})
    contactId!: string

    @ManyToOne(() => Contact, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'contactId'})
    contact!: Contact

    @Column({type:'varchar', length:50})
    action!: string

    @Column({type:'varchar', length:255, nullable:true})
    changedBy?: string;

    @Column({type: 'jsonb', nullable: true})
    changes?: Record<string, any>

    @Column({type:'inet', nullable: true})
    ipAddress?:string;

    @CreateDateColumn({type:'time with time zone'})
    createdAt!: Date
}
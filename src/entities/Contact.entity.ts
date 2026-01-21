/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */

import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index, BeforeInsert, BeforeUpdate} from 'typeorm';
import { IsEmail, IsNotEmpty, Length,IsOptional} from 'class-validator';

export enum ContactType{
    EMAIL = 'email',
    WHATSAPP = 'whatsapp',
    FORM = 'form',   
}

export enum ContactStatus{
    PENDING = 'pending',
    PROCESSING = 'processing',
    RESPONDED = 'responded',
    ARCHIVED = 'archived'
}

export enum PriorityLevel{
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    URGENT = 'urgent'
}

@Entity('contacts')
@Index(['createdAt'])
@Index(['status'])
@Index(['type'])
@Index(['email'])
export class Contact{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type: 'enum', enum: ContactType, nullable: false, default: ContactType.EMAIL})
    type!: ContactType;

    @Column({type: 'enum', enum: ContactStatus, nullable: false, default: ContactStatus.PENDING})
    status!: ContactStatus;

    @Column({type: 'enum', enum: PriorityLevel, nullable: false, default: PriorityLevel.LOW})
    priority!: PriorityLevel;

    @Column({type: 'varchar', length:255})
    @IsNotEmpty()
    @Length(2,255)
    fullName!: string;

    @Column({type: 'varchar', length:255})
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @Column({type: 'varchar', length:50})
    @IsOptional()
    phone?: string;

    @Column({type: 'varchar', length:255})
    @IsOptional()
    company?: string;

    @Column({type: 'varchar', length:500})
    @IsOptional()
    subject?: string;

    @Column({type: 'text'})
    @IsNotEmpty()
    message!: string;

        // Metadata
    @Column({ type: 'inet', nullable: true })
    ipAddress?: string;

    @Column({ type: 'text', nullable: true })
    userAgent?: string;

    @Column({ type: 'text', nullable: true })
    referrer?: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    utmSource?: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    utmMedium?: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    utmCampaign?: string;

    // Security & Compliance
    @Column({ type: 'boolean', default: false })
    consentGiven!: boolean;

    @Column({ type: 'boolean', default: true })
    gdprCompliant!: boolean;

    @Column({ type: 'decimal', precision: 3, scale: 2, default: 0.0 })
    spamScore!: number;

    @Column({ type: 'boolean', default: false })
    isVerified!: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    verificationToken?: string;

    // Timestamps
    @CreateDateColumn({ type: 'timestamp with time zone' })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone' })
    updatedAt!: Date;

    @Column({ type: 'timestamp with time zone', nullable: true })
    respondedAt?: Date;

    @BeforeInsert()
    @BeforeUpdate()
    sanitizeData(){
        this.fullName = this.fullName.trim();
        this.email = this.email?.toLowerCase().trim();
        this.company = this.company?.trim();
    }
}

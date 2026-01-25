/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */

import crypto from 'crypto';
import validator from 'validator';
import sanitizeHtml from 'sanitize-html';
import { env } from '@/env.schema';
import { CreateContactDto } from '../dto/create-contact.dto';
import { isDisposableEmail } from '../utils/disposable-emails';


export class SecurityService {
  private readonly encryptionKey: string;
  private readonly algorithm = 'aes-256-gcm';

  constructor() {
    this.encryptionKey = env.ENCRYPTION_KEY || crypto.randomBytes(32).toString('hex');
  }

  
  encrypt(text: string): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(
      this.algorithm,
      Buffer.from(this.encryptionKey, 'hex'),
      iv
    );

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const authTag = cipher.getAuthTag();

    return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
  }

  
  decrypt(encryptedText: string): string {
    const parts = encryptedText.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const authTag = Buffer.from(parts[1], 'hex');
    const encrypted = parts[2];

    const decipher = crypto.createDecipheriv(
      this.algorithm,
      Buffer.from(this.encryptionKey, 'hex'),
      iv
    );

    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }

  
  sanitizeInput(input: string): string {
    return sanitizeHtml(input, {
      allowedTags: [],
      allowedAttributes: {},
    });
  }

  
  sanitizeEmail(email: string): string {
    return validator.normalizeEmail(email) || email.toLowerCase().trim();
  }

  
  calculateSpamScore(contact: CreateContactDto): number {
    let score = 0;

    // Check for suspicious patterns
    const suspiciousKeywords = ['viagra', 'casino', 'lottery', 'winner', 'claim', 'prize'];
    const messageContent = `${contact.subject || ''} ${contact.message}`.toLowerCase();

    suspiciousKeywords.forEach((keyword) => {
      if (messageContent.includes(keyword)) score += 0.2;
    });

    // Check for excessive URLs
    const urlCount = (contact.message.match(/https?:\/\//g) || []).length;
    if (urlCount > 3) score += 0.3;

    // Check for all caps
    const capsPercentage = (contact.message.match(/[A-Z]/g) || []).length / contact.message.length;
    if (capsPercentage > 0.5) score += 0.2;

    // Check for valid email domain
    if(isDisposableEmail(contact.email)) score += 0.4;

    return Math.min(score, 1.0);
  }

  generateVerificationToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }

  hashToken(token: string): string {
    return crypto.createHash('sha256').update(token).digest('hex');
  }
}
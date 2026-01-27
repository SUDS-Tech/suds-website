/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */


import nodemailer from 'nodemailer';
import { Contact, ContactType } from '../entities/Contact.entity';
import { env } from "../config/env";

export class NotificationService{
    private transporter: nodemailer.Transporter;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: env.SMTP_HOST,
            port: env.SMTP_PORT,
            secure: env.SMTP_SECURE === 'true',
            auth: {
                user: env.SMTP_USER,
                pass: env.SMTP_PASS
            },
        });
    }

    async sendNotification(contact: Contact):Promise<void>{
        await this.sendInternalNotification(contact);

        await this.sendUserConfirmation(contact);

        if(contact.type === ContactType.WHATSAPP && contact.phone){
            await this.sendWhatsAppNotification(contact);
        }
    }

    private async sendInternalNotification(contact: Contact): Promise<void>{
        const mailOptions = {
            from: env.SMTP_USER,
            to: env.INTERNAL_EMAIL,
            subject: `New ${contact.type.toUpperCase()} Contact: ${contact.subject || 'No Subject'}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">New Contact Submission</h2>
          <p><strong>Type:</strong> ${contact.type}</p>
          <p><strong>Priority:</strong> ${contact.priority}</p>
          <p><strong>Name:</strong> ${contact.fullName}</p>
          <p><strong>Email:</strong> ${contact.email}</p>
          ${contact.phone ? `<p><strong>Phone:</strong> ${contact.phone}</p>` : ''}
          ${contact.company ? `<p><strong>Company:</strong> ${contact.company}</p>` : ''}
          ${contact.subject ? `<p><strong>Subject:</strong> ${contact.subject}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${contact.message}
          </p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;">
          <p style="font-size: 12px; color: #888;">
            Submitted on: ${contact.createdAt.toLocaleString()}<br>
            Spam Score: ${contact.spamScore}
          </p>
        </div>
      `,
        };

        await this.transporter.sendMail(mailOptions);
    }

    private async sendUserConfirmation(contact: Contact): Promise<void>{
        const mailOptions = {
            from: env.SMTP_USER,
            to: contact.email,
            subject: 'Thank you for contacting SUDS Technologies Ltd.',
             html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">Thank You, ${contact.fullName}!</h2>
          <p>We've received your message and our team will get back to you within 24 hours.</p>
          <p style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #0066cc; margin: 20px 0;">
            <strong>Your Reference ID:</strong> ${contact.id}
          </p>
          <p>If you need immediate assistance, please call us or visit our website.</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;">
          <p style="font-size: 12px; color: #888;">
            SUDS Technologies Ltd<br>
            Secure. Unique. Durable.<br>
            suds-tech.com | info@suds-tech.com | Kampala, Uganda
          </p>
        </div>
      `,
            
        };

        await this.transporter.sendMail(mailOptions);
    }

    private async sendWhatsAppNotification(contact: Contact): Promise<void>{
        //I think here we gonna use MsGine
        console.log(`Whatsapp notification would be sent to ${contact.phone}`);
    }
}
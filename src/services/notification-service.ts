import nodemailer from 'nodemailer';
import { Contact, ContactType } from '../entities/Contact.entity';
import {env} from '../../env.schema'

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

        if(contact.type === ContactType.WHATSAPP && contact.phone cont)
    }
}
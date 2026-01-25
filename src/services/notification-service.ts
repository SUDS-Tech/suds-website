import nodemailer from 'nodemailer';
import { Contact, ContactType } from '../entities/Contact.entity';

export class NotificationService{
    private transporter: nodemailer.Transporter;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 
        })
    }
}
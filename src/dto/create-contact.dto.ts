import { IsEmail, IsNotEmpty, IsEnum, IsOptional, Length, Matches, IsBoolean } from "class-validator";
import { ContactType } from "../entities/Contact.entity";

export class CreateContactDto {
  @IsEnum(ContactType)
  @IsNotEmpty()
  type!: ContactType;

  @IsNotEmpty()
  @Length(2, 255, { message: 'Full name must be between 2 and 255 characters' })
  fullName!: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty()
  email!: string;

  @IsOptional()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number format' })
  phone?: string;

  @IsOptional()
  @Length(0, 255)
  company?: string;

  @IsOptional()
  @Length(0, 500)
  subject?: string;

  @IsNotEmpty()
  @Length(10, 5000, { message: 'Message must be between 10 and 5000 characters' })
  message!: string;

  @IsBoolean()
  consentGiven!: boolean;

  // UTM Parameters
  @IsOptional()
  utmSource?: string;

  @IsOptional()
  utmMedium?: string;

  @IsOptional()
  utmCampaign?: string;
}
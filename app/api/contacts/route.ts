/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */


import { NextRequest,NextResponse } from 'next/server';
import { validate, Validate } from 'class-validator';
import {plainToClass} from 'class-transformer';
import { ContactService } from '@/src/services/contacts-service';
import { RateLimitService } from '@/src/services/rate-limit-service';
import { CreateContactDto } from '@/src/dto/create-contact.dto';
import 'reflect-metadata';

const contactService = new ContactService();
const rateLimitService = new RateLimitService();

export async function POST(request: NextRequest){
    try{
        const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';
        const referrer = request.headers.get('referrer') || undefined;

        const allowed = await rateLimitService.checkRateLimit(ipAddress);
        if(!allowed){
            return NextResponse.json({
                success: false,
                error: 'Too many requests. Please try again later.'
            },{
                status:429
            })
        };

        const body = await request.json();
        const dto = plainToClass(CreateContactDto, body);
        const errors = await validate(dto);

        if(errors.length > 0){
            return NextResponse.json(
                {
                    success: false,
                    errors: errors.map((error) =>({
                        property: error.property,
                        constants: error.constraints
                    })),
                    
                },
                {
                        status: 400
                    }
            )
        };

        const contact = await contactService.createContact(dto, {
            ipaddress: ipAddress,
            userAgent,
            referrer
        });

        return NextResponse.json({
            success: true,
            data: {
                id: contact.id,
                type: contact.type,
                status: contact.status,
                createdAt: contact.createdAt,
            },
            message: "Contact submitted successfully. We will get back to you soon."
        },{
            status: 200
        })
    } catch(err){
        console.log('Contact creation error', err);

        return NextResponse.json(
            {
                success: false,
                error: 'An error ocurred while processing your request.'
            },{
                status: 500
            }
        )
    }
}

//This endpoint will be used incase we get the admin panel.
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const type = searchParams.get('type');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    // We will add authentication check here for admin access

    const result = await contactService.getContacts({
      status: status as any,
      type: type || undefined,
      page,
      limit,
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error('Contacts retrieval error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred while fetching contacts.',
      },
      { status: 500 }
    );
  }
}
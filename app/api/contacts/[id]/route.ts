import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '@/src/services/contacts-service';
import { ContactStatus } from '@/src/entities/Contact.entity';

const contactService = new ContactService();

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Admin authentication will be checked here

    const body = await request.json();
    const { status } = body;

    if (!Object.values(ContactStatus).includes(status)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid status value',
        },
        { status: 400 }
      );
    }

    const contact = await contactService.updateContactStatus(
      params.id,
      status,
      'ADMIN' // Replace with actual user from auth
    );

    return NextResponse.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error('Contact update error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      },
      { status: 500 }
    );
  }
}
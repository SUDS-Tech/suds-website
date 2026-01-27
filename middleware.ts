

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { env } from "./src/config/env";

export function middleware(request: NextRequest){
    //security headers
    const response = NextResponse.next();

    response.headers.set('X-DNS-Prefetch-Control', 'on');
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=()'
    );

    if(request.nextUrl.pathname.startsWith('/api/')){
        response.headers.set('Access-Control-Allow-Origin', env.ALLOWED_ORIGINS);
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }

    return response

}

export const config = {
        matcher: [
            '/api/:path*',
            '/((?!_next/static|_next/image|favicon.ico).*)',
        ]
    }
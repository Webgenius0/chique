// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login' || path === '/signup'

    // Get token name from environment variable with fallback
    const tokenName = process.env.AUTH_TOKEN_NAME || 'accessToken'
    const token = request.cookies.get(tokenName)?.value

    // Redirect logic
    {/* 
        
        if (!token && path.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

    if (token && isPublicPath) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }
        
        
        
        */}
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/login',
        '/signup'
    ]
}
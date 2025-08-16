import { NextResponse } from 'next/server';

export function middleware(request) {
    const path = request.nextUrl.pathname;

    // Paths that don't require login
    const isPublicPath = path === '/auth/sign-in' || path === '/auth/sign-up' || path === '/auth/user-verification';

    // Get token name from env with a proper fallback
    const tokenName = process.env.AUTH_TOKEN_NAME || 'chique_auth_token';

    // Read token from cookies (sent in the HTTP request)
    const token = request.cookies.get(tokenName)?.value;

    // If no token and trying to access a protected route, redirect to login
    if (!token && path.startsWith('/dashboard')) {
        const loginUrl = new URL('/auth/sign-in', request.url);
        return NextResponse.redirect(loginUrl);
    }
    // If logged in and trying to access login/signup, redirect to dashboard
    if (token && isPublicPath) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    // Allow the request if nothing matched above
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/auth/sign-in',   
        '/auth/sign-up',   
    ],
};

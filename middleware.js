import { NextResponse } from 'next/server';

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const tokenName = process.env.AUTH_TOKEN_NAME || 'chique_auth_token';
    const token = request.cookies.get(tokenName)?.value;

    // Public routes
    const publicRoutes = [
        '/auth/sign-in',
        '/auth/sign-up',
        '/auth/user-verification',
        '/auth/forgot-password',
        '/auth/create-new-password',
        '/auth/reset-verification'
    ];

    // Protected routes
    const protectedRoutes = [
        '/dashboard',
        '/quiz',
        '/welcome',
    ];

    const isPublicPath = publicRoutes.includes(path);
    const isProtectedPath = protectedRoutes.includes(path);

    // Redirect to login if accessing protected routes without token
    if (!token && isProtectedPath) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url));
    }

    // Redirect to dashboard if accessing public routes with token
    if (token && isPublicPath) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/auth/:path*',
        '/quiz',
        '/welcome',
    ],
};

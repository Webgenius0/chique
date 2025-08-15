import { NextResponse } from 'next/server';

export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/auth/sign-in' || path === '/auth/sign-up';

    const tokenName = process.env.AUTH_TOKEN_NAME || 'chique_auth_token';
    const token = request.cookies.get(tokenName)?.value;
    console.log("Token", token);

    if (!token && path.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url));
    }
    if (token && isPublicPath) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/auth/sign-in',
        '/auth/sign-up',
    ],
};

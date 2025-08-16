import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value; // or session cookie

  const loginUrl = new URL('/login', req.url);

  // Redirect if no token and not already on login page
  if (!token && !req.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Apply middleware only to certain routes
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*', '/booking_confirmation/:path*', '/cart/:path*'], // protect these
};

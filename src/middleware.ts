import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { ACCESS_TOKEN } from './pages/auth/spotify/callback';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(ACCESS_TOKEN);

  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/artists', '/tracks'],
  runtime: 'experimental-edge', // for Edge API Routes only
  unstable_allowDynamic: [
    '/node_modules/function-bind/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
};

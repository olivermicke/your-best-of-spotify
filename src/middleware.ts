import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { ACCESS_TOKEN } from './lib/spotify-api-client.constants';
import { getAccessTokenFromWorkaroundPath } from './middleware.helpers';

export const COOKIE_WORKAROUND_PATH = '/auth/spotify/callback/success';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // TODO: Remove this as soon as server components support setting cookies.
  // https://github.com/vercel/community/discussions/1132
  if (pathname.startsWith(COOKIE_WORKAROUND_PATH)) {
    const accessToken = getAccessTokenFromWorkaroundPath(pathname);

    const response = NextResponse.redirect(new URL('/artists', request.url));
    // TODO: Set cookie properties http-only and max-age as soon as Next supports them.
    // https://github.com/vercel/next.js/issues/33472
    response.cookies.set(ACCESS_TOKEN, accessToken);

    return response;
  }

  if (['/artists', '/tracks'].includes(pathname)) {
    const accessToken = request.cookies.get(ACCESS_TOKEN);

    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  if (pathname === '/') {
    const accessToken = request.cookies.get(ACCESS_TOKEN);

    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.redirect(new URL('/artists', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/artists', '/tracks', COOKIE_WORKAROUND_PATH],
  runtime: 'experimental-edge', // for Edge API Routes only
  unstable_allowDynamic: [
    '/node_modules/function-bind/**', // use a glob to allow anything in the function-bind 3rd party module
  ],
};

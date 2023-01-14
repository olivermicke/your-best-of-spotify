const ACCESS_TOKEN = 'access_token';

export const config = {
  matcher: ['/artists', '/tracks'],
};

export default function middleware(request) {
  const accessToken = request.cookies.get(ACCESS_TOKEN);

  if (!accessToken) {
    return Response.redirect(new URL('/login', request.url));
  }
  return Response.next();
}

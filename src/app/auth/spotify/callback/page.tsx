import { redirect } from 'next/navigation';

import { getUnauthorizedSpotifyApi } from 'lib/spotify-api-client';

import { getCookieWorkaroundPath } from '../../../../middleware.helpers';

const AuthSpotifyCallback = async ({
  searchParams,
}: {
  searchParams: { code?: string };
}) => {
  const spotifyAuthCode = searchParams.code;

  if (!spotifyAuthCode) {
    redirect('/auth/spotify/callback/error');
  }

  const authRequest = await getUnauthorizedSpotifyApi().authorizationCodeGrant(
    spotifyAuthCode
  );
  const accessToken = authRequest.body.access_token;

  if (!accessToken) {
    redirect('/auth/spotify/callback/error');
  }

  redirect(getCookieWorkaroundPath(accessToken));
};

export default AuthSpotifyCallback;

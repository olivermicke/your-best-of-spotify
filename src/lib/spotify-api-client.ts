import { cookies } from 'next/headers';

import { ACCESS_TOKEN } from './spotify-api-client.constants';
import {
  TopArtist,
  TopArtistsResponse,
  TopTrack,
  TopTracksResponse,
} from './spotify-api-client.types';

const SpotifyWebApi = require('spotify-web-api-node');

const SPOTIFY_CREDENTIALS = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri:
    process.env.NODE_ENV === 'production'
      ? 'https://your-best-of-spotify.vercel.app/auth/spotify/callback'
      : 'http://localhost:3000/auth/spotify/callback',
};

const SPOTIFY_SCOPES = ['user-top-read'];

// Need a number divisible by 3 for clean layout
const LIMIT = 48;

const TOP_API_PROPS = {
  limit: LIMIT,
  offset: 0,
  time_range: 'long_term',
};

export function getAccessToken(): string | null {
  return cookies().get(ACCESS_TOKEN)?.value ?? null;
}

export function getUnauthorizedSpotifyApi(): any {
  return new SpotifyWebApi(SPOTIFY_CREDENTIALS);
}

export function getAuthorizedSpotifyApi(accessToken: string): any {
  const spotifyApi = new SpotifyWebApi(SPOTIFY_CREDENTIALS);
  spotifyApi.setAccessToken(accessToken);

  return spotifyApi;
}

export function getSpotifyLoginUrl(): string {
  const spotifyLoginUrl =
    getUnauthorizedSpotifyApi().createAuthorizeURL(SPOTIFY_SCOPES);

  return spotifyLoginUrl;
}

export async function getSpotifyTopArtists(
  accessToken: string
): Promise<TopArtist[]> {
  const topArtists =
    getAuthorizedSpotifyApi(accessToken).getMyTopArtists(TOP_API_PROPS);

  return topArtists.then((data: TopArtistsResponse): TopArtist[] => {
    return data.body.items;
  });
}

export async function getSpotifyTopTracks(
  accessToken: string
): Promise<TopTrack[]> {
  const topArtists =
    getAuthorizedSpotifyApi(accessToken).getMyTopTracks(TOP_API_PROPS);

  return topArtists.then((data: TopTracksResponse): TopTrack[] => {
    return data.body.items;
  });
}

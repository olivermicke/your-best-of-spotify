import { COOKIE_WORKAROUND_PATH } from './middleware';

export const getCookieWorkaroundPath = (accessToken: string): string =>
  `${COOKIE_WORKAROUND_PATH}/${accessToken}`;

export const getAccessTokenFromWorkaroundPath = (pathname: string): string =>
  pathname.split(`${COOKIE_WORKAROUND_PATH}/`)[1];

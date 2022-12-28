import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { GetServerSideProps, NextPage } from 'next';
import { AppProps } from 'next/app';
import { Component } from 'react';
import { getUnauthorizedSpotifyApi } from '../../../lib/spotify-api-client';
import { redirect } from 'next/dist/server/api-utils';

const SpotifyWebApi = require('spotify-web-api-node');

type Cookies = {
  accessToken: string | null;
  refreshToken: string | null;
};

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const spotifyAuthorizationCode = context.query.code;

  try {
    const authRequest =
      await getUnauthorizedSpotifyApi().authorizationCodeGrant(
        spotifyAuthorizationCode
      );

    context.res.setHeader(
      'set-cookie',
      `access_token=${authRequest.body.access_token}; path=/; samesite=lax; httponly; max-age=3600;`
    );

    return { props: {}, redirect: { destination: '/artists' } };
  } catch (e) {
    return { props: {}, redirect: { destination: '/auth/spotify/error' } };
  }
};

function Callback() {
  return null;
}

export default Callback;

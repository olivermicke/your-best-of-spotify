import { GetServerSideProps } from 'next';
import Link from 'next/link';

import styles from '../components/layout/LoginPage.module.css';
import { WiredButton } from '../components/wired-elements/WiredButton';
import { getSpotifyLoginUrl } from '../lib/spotify-api-client';

type ServerSideProps = { spotifyLoginUrl: string };

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  _context
) => {
  const spotifyLoginUrl = getSpotifyLoginUrl();

  return { props: { spotifyLoginUrl } };
};

function Login({ spotifyLoginUrl }: ServerSideProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your Best Of Spotify</h1>
      <p>Find out your top artists and tracks.</p>
      <p>
        Don&apos;t want to login? Use my personal data as a substitue for yours!
      </p>
      <div className={styles.linkContainer}>
        <Link className={styles.link} href={spotifyLoginUrl}>
          <WiredButton elevation={3}>Sign in with Spotify</WiredButton>
        </Link>
        <Link className={styles.link} href='/mocked/artists'>
          Use sample data
        </Link>
      </div>
    </div>
  );
}

export default Login;

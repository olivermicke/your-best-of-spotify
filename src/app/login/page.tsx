import Link from 'next/link';

import { WiredButton } from 'components/wired-elements/WiredButton';
import { getSpotifyLoginUrl } from 'lib/spotify-api-client';

import styles from './page.module.css';

const LoginPage = () => {
  const spotifyLoginUrl = getSpotifyLoginUrl();

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
};

export default LoginPage;

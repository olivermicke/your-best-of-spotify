import { GetServerSideProps } from 'next';
import Link from 'next/link';
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
    <>
      <Link href={spotifyLoginUrl}>Login</Link>
    </>
  );
}

export default Login;

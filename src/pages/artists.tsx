import { GetServerSideProps } from 'next';
import {
  getAccessToken,
  getSpotifyTopArtists,
} from '../lib/spotify-api-client';
import { TopArtist } from '../lib/spotify-api-client.types';

type ServerSideProps = {
  topArtists: TopArtist[];
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  const accessToken = getAccessToken(context);
  const topArtists = await getSpotifyTopArtists(accessToken);

  return { props: { topArtists } };
};

function Artists({ topArtists }: ServerSideProps) {
  return (
    <ol>
      {topArtists.map((artist) => (
        <li key={artist.id}>{artist.name}</li>
      ))}
    </ol>
  );
}

export default Artists;

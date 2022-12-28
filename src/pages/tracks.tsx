import { GetServerSideProps } from 'next';
import { getAccessToken, getSpotifyTopTracks } from '../lib/spotify-api-client';
import { TopTrack } from '../lib/spotify-api-client.types';

type ServerSideProps = {
  topTracks: TopTrack[];
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  const accessToken = getAccessToken(context);
  const topTracks = await getSpotifyTopTracks(accessToken);

  return { props: { topTracks } };
};

function Artists({ topTracks }: ServerSideProps) {
  return (
    <ol>
      {topTracks.map((tracks) => (
        <li key={tracks.id}>{tracks.name}</li>
      ))}
    </ol>
  );
}

export default Artists;

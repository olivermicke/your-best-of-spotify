import { GetServerSideProps } from 'next';

import { CardGrid, Entity } from '../components/layout/CardGrid';
import { mapTopTracksToEntities } from '../components/layout/CardGrid.helpers';
import { SpotifyLoginUrlContext } from '../contexts/spotify-login-url-context';
import {
  getAccessToken,
  getSpotifyLoginUrl,
  getSpotifyTopTracks,
} from '../lib/spotify-api-client';

type ServerSideProps = {
  entities: Entity[];
  spotifyLoginUrl: string;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  const spotifyLoginUrl = getSpotifyLoginUrl();

  const accessToken = getAccessToken(context);

  const topTracks = await getSpotifyTopTracks(accessToken);
  const entities = mapTopTracksToEntities(topTracks);

  return { props: { entities, spotifyLoginUrl } };
};

function Tracks({ entities, spotifyLoginUrl }: ServerSideProps) {
  return (
    <SpotifyLoginUrlContext.Provider value={spotifyLoginUrl}>
      <CardGrid entities={entities} />
    </SpotifyLoginUrlContext.Provider>
  );
}

export default Tracks;

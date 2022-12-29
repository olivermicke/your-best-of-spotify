import { GetServerSideProps } from 'next';

import { CardGrid, Entity } from '../components/layout/CardGrid';
import { mapTopArtistsToEntities } from '../components/layout/CardGrid.helpers';
import { SpotifyLoginUrlContext } from '../contexts/spotify-login-url-context';
import {
  getAccessToken,
  getSpotifyLoginUrl,
  getSpotifyTopArtists,
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

  const topArtists = await getSpotifyTopArtists(accessToken);
  const entities = mapTopArtistsToEntities(topArtists);

  return { props: { entities, spotifyLoginUrl } };
};

function Artists({ entities, spotifyLoginUrl }: ServerSideProps) {
  return (
    <SpotifyLoginUrlContext.Provider value={spotifyLoginUrl}>
      <CardGrid entities={entities} />
    </SpotifyLoginUrlContext.Provider>
  );
}

export default Artists;

import { GetServerSideProps } from 'next';

import { CardGrid, Entity } from '../../components/layout/CardGrid';
import { SpotifyLoginUrlContext } from '../../contexts/spotify-login-url-context';
import { mockedTopTracks } from '../../lib/mocked-top-tracks';
import { getSpotifyLoginUrl } from '../../lib/spotify-api-client';

type ServerSideProps = {
  entities: Entity[];
  spotifyLoginUrl: string;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  _context
) => {
  const spotifyLoginUrl = getSpotifyLoginUrl();

  const entities = mockedTopTracks;

  return { props: { entities, spotifyLoginUrl } };
};

function MockedTracks({ entities, spotifyLoginUrl }: ServerSideProps) {
  return (
    <SpotifyLoginUrlContext.Provider value={spotifyLoginUrl}>
      <CardGrid entities={entities} />
    </SpotifyLoginUrlContext.Provider>
  );
}

export default MockedTracks;

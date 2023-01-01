import { redirect } from 'next/navigation';

import { getAccessToken, getSpotifyTopArtists } from 'lib/spotify-api-client';

import { CardGrid } from '../card-grid';
import { mapTopArtistsToEntities } from '../card-grid.helpers';

const ArtistsPage = async () => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    redirect('/login');
  }

  const topArtists = await getSpotifyTopArtists(accessToken);
  const entities = mapTopArtistsToEntities(topArtists);

  return <CardGrid entities={entities} />;
};

export default ArtistsPage;

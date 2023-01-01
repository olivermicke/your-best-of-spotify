import { redirect } from 'next/navigation';

import { getAccessToken, getSpotifyTopTracks } from 'lib/spotify-api-client';

import { CardGrid } from '../_components/card-grid';
import { mapTopTracksToEntities } from '../_components/card-grid.helpers';

const TracksPage = async () => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    redirect('/login');
  }

  const topTracks = await getSpotifyTopTracks(accessToken);
  const entities = mapTopTracksToEntities(topTracks);

  return <CardGrid entities={entities} />;
};

export default TracksPage;

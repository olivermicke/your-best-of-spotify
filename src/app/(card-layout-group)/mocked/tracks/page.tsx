import { mockedTopTracks } from 'lib/mocked-top-tracks';

import { CardGrid } from '../../_components/card-grid';

const MockedTracksPage = async () => {
  const entities = mockedTopTracks;

  return <CardGrid entities={entities} />;
};

export default MockedTracksPage;

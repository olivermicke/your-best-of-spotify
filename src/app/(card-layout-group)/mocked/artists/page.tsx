import { mockedTopArtists } from 'lib/mocked-top-artists';

import { CardGrid } from '../../_components/card-grid';

const MockedArtistsPage = async () => {
  const entities = mockedTopArtists;

  return <CardGrid entities={entities} />;
};

export default MockedArtistsPage;

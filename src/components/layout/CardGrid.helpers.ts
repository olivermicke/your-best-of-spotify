import { TopArtist, TopTrack } from '../../lib/spotify-api-client.types';
import { Entity } from './CardGrid';

export function mapTopArtistsToEntities(topArtists: TopArtist[]): Entity[] {
  return topArtists.map((artist) => {
    const artistImage = artist.images[0];

    return {
      image: {
        src: artistImage.url,
      },
      name: artist.name,
    };
  });
}

export function mapTopTracksToEntities(topTracks: TopTrack[]): Entity[] {
  return topTracks.map((track) => {
    const albumImage = track.album.images[0];

    return {
      image: {
        src: albumImage.url,
      },
      name: track.name,
      subtitle: track.artists.map(({ name }) => name).join(' & '),
    };
  });
}

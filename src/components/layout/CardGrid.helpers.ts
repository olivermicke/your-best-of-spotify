import { TopArtist, TopTrack } from '../../lib/spotify-api-client.types';
import { Entity } from './CardGrid';

export function mapTopArtistsToEntities(topArtists: TopArtist[]): Entity[] {
  return topArtists.map((artist) => {
    const artistImage = artist.images[0];

    return {
      image: {
        height: artistImage.height,
        src: artistImage.url,
        width: artistImage.width,
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
        height: albumImage.height,
        src: albumImage.url,
        width: albumImage.width,
      },
      name: track.name,
      subtitle: track.artists.map(({ name }) => name).join(' & '),
    };
  });
}

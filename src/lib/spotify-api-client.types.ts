type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

type ExternalUrls = { spotify: string };

type Images = { height: number; width: number; url: string };

export type TopArtist = {
  external_urls: ExternalUrls;
  followers: { href: null; total: number };
  genres: string[];
  href: string;
  id: string;
  images: Images[];
  name: string;
  popularity: number;
  type: number;
  uri: number;
};

export type TopTrack = {
  album: {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls[];
    href: string;
    id: string;
    images: Images[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};

type TopResponseBody<T> = {
  items: T[];
  total: number;
  limit: number;
  offset: number;
  previous: any;
  href: string;
  next: any;
};

export type SpotifyApiClientResponse<T> = {
  body: T;
  headers: Record<string, string>;
  statusCode: number;
};

export type TopArtistsResponse = SpotifyApiClientResponse<
  TopResponseBody<TopArtist>
>;

export type TopTracksResponse = SpotifyApiClientResponse<
  TopResponseBody<TopTrack>
>;

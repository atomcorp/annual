export type PlaylistId = string;
export type PlaylistIds = { [id: string]: PlaylistId };
export type SpotifyApiArtist = {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};
export type SpotifyApiImage = {
  height: number;
  url: string;
  width: number;
}
export type SpotifyApiAlbum = {
  album_type: string;
  artists: SpotifyApiArtist[];
  available_markets: string[];
  external_urls: string;
  href: string;
  id: string;
  images: SpotifyApiImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
export type SpotifyApiTrack = {
  track: {
    album: SpotifyApiAlbum;
    artists: SpotifyApiArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: string;
    external_urls: string;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
  }
}
export type SpotifyApiTracks = SpotifyApiTrack[];
export type SpotifyPlaylistApi = {
  body: {
    name: string;
    tracks: {
      href: string;
      items: SpotifyApiTracks;
      limit: number;
      next?: any;
      offset: number;
      previous?: any;
      total: number;
    };
  };
};
export type Track = {
  artists: string[];
  name: string;
}
export type Playlist = {
  tracks: Track[] | [];
}

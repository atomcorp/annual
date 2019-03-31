export type PlaylistId = string;
export type PlaylistIds = { [id: string]: PlaylistId };
export type SpotifyPlaylistApi = {
  body: {
    name: string;
    tracks: {
      href: string;
      items: Item[{
        track: {
          album: Album;
          artists: Artist2[];
          available_markets: string[];
          disc_number: number;
          duration_ms: number;
          episode: boolean;
          explicit: boolean;
          external_ids: ExternalIds;
          external_urls: ExternalUrls7;
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
        };
      }];
      limit: number;
      next?: any;
      offset: number;
      previous?: any;
      total: number;
    };
  };
};
export type PlaylistTrack = {};
export type PlaylistType = {};

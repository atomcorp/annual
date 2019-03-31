import { SpotifyPlaylistApi, Playlist } from '../types';

const parsePlaylistData = (data: SpotifyPlaylistApi): Playlist => ({
  tracks: data.body.tracks.items.map((item) => {
    const artists = item.track.artists.map((artist) => artist.name);
    const name = item.track.name;
    return {
      artists, name
    }
  })
})

export default parsePlaylistData;

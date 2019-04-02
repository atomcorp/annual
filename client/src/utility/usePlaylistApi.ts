import {useState, useEffect} from 'react';

import {PlaylistId, Playlist} from '../types';
import parsePlaylistData from './parsePlaylistData';

const requestPlaylist = (playlistId: PlaylistId): Promise<Playlist> =>
  fetch(`/api/playlist/${playlistId}`)
    .then((res) => res.json())
    .then((result) => {
      return parsePlaylistData(result);
    });

const usePlaylistApi = (playlistId: PlaylistId): Playlist => {
  const [playlist, setPlaylist] = useState<Playlist>({tracks: [], name: ''});

  useEffect(() => {
    requestPlaylist(playlistId).then((res: Playlist) => {
      setPlaylist(res);
    });
  }, [playlistId]);

  return playlist;
};

export default usePlaylistApi;

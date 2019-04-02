import React, { useState, useEffect } from 'react';

import { PlaylistId, SpotifyPlaylistApi, Playlist } from '../types';
import parsePlaylistData from './parsePlaylistData';

type RequestApiType = Promise<SpotifyPlaylistApi>;

async function requestPlaylist(playlistId: PlaylistId): Promise<Playlist> {
  const result = await fetch(`/api/playlist/${playlistId}`)
    .then((res) => res.json())
    .then((result) => parsePlaylistData(result));
  return result;
};

const usePlaylistApi = (playlistId: PlaylistId): Playlist => {
  const [playlist, setPlaylist] = useState<Playlist>({ tracks: [] , name: ''});

  useEffect(() => {
    requestPlaylist(playlistId).then((res: Playlist) => {
      setPlaylist(res)
    });
  }, [playlistId]);

  return playlist;
};

export default usePlaylistApi;

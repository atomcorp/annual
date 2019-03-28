import React, { useState, useEffect } from 'react';

import { PlaylistId, SpotifyPlaylistApi } from '../types';
import parsePlaylistData from './parsePlaylistData';

type RequestApiType = Promise<SpotifyPlaylistApi>;

const requestPlaylist = (playlistId: PlaylistId): RequestApiType => {
  return fetch(`/api/playlist/${playlistId}`)
    .then((res) => res.json())
    .then((result) => parsePlaylistData(result));
};

const usePlaylistApi = (playlistId: PlaylistId): RequestApiType => {
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    setPlaylist(requestPlaylist(playlistId));
  }, [playlistId]);

  return playlist;
};

export default usePlaylistApi;

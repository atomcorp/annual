import React, { useState, useEffect } from 'react';

import { PlaylistId } from '../types';

type RequestApiType = Promise<{}>;

const requestPlaylist = (playlistId: PlaylistId): RequestApiType => {
  return fetch(`/api/playlist/${playlistId}`)
    .then((res) => res.json())
    .then((result) => result);
};

const usePlaylistApi = (playlistId: PlaylistId): RequestApiType => {
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    setPlaylist(requestPlaylist(playlistId));
  }, [playlistId]);

  return playlist;
};

export default usePlaylistApi;

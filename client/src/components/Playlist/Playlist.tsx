import React from 'react';

import { usePlaylistApi } from '../../utility';
import { PlaylistId, Playlist as PlaylistType } from '../../types';

type PropsType = {
  id: PlaylistId;
};

const Playlist = (props: PropsType) => {
  const playlistData = usePlaylistApi(props.id);
  console.log(playlistData)
  return (
    <section>
      <div>Playlist: {props.id}</div>
    </section>
  );
};

export default Playlist;

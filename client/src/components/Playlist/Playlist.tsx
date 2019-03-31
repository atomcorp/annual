import React from 'react';

import {usePlaylistApi} from '../../utility';
import {PlaylistId, Playlist as PlaylistType} from '../../types';

type PropsType = {
  id: PlaylistId;
};

const Playlist = (props: PropsType) => {
  const data = usePlaylistApi(props.id);
  return (
    <section>
      <h1>{data.name}</h1>
      <div>Playlist: {props.id}</div>
      <ol>
        {data.tracks.map((track, i) => (
          <li key={i}>
            {track.artists.join(', ')} - {track.name}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Playlist;

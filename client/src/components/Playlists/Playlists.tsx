import React from 'react';

import { Playlist } from '../';
import { playlistIds } from '../../consts';

const Playlists = () => (
  <section>
    <Playlist id={playlistIds['2019']} />
  </section>
);

export default Playlists;

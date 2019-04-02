import React from 'react';
import {Link} from 'react-router-dom';

import {Playlist} from '../';
import {playlistIds} from '../../consts';

const Playlists = () => (
  <section>
    <ul>
      {Object.keys(playlistIds).map((playlistYear) => (
        <li>
          <Link key={playlistYear} to={`/playlist/${playlistIds[playlistYear]}`}>
            {playlistYear}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default Playlists;

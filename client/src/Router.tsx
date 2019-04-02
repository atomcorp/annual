import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Playlists, Playlist} from './components';

const Router = () => (
  <Switch>
    <Route
      path="/playlist/:id"
      render={(props) => <Playlist id={props.match.params.id} />}
    />
    <Route component={Playlists} />
  </Switch>
);

export default Router;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Playlists } from './components';

class App extends Component {
  componentDidMount() {
    fetch('/api/playlist/1pjTl4HGhrtTB2w1WVvcqS')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
  render() {
    return (
      <div className="App">
        <Playlists />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Router from './Router';

class App extends Component {
  // componentDidMount() {
  //   fetch('/api/playlist/1pjTl4HGhrtTB2w1WVvcqS')
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //     });
  // }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

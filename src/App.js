import 'babel-polyfill';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import logo from './logo.svg';
// import './App.css';
import winode from './redux/reducers';
import RedditWidget from './components/RedditWidget';
import StatusWidget from './components/StatusWidget';

const store = createStore(winode);

class App extends Component {
  render() {
    return (
      <div>
        <StatusWidget />
      </div>
    );
  }
}

export default App;

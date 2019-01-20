import 'babel-polyfill';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import winode from './redux/reducers';
import RedditWidget from './components/RedditWidget';

const store = createStore(winode);

class App extends Component {
  render() {
    return (
      <div>
        <RedditWidget />
      </div>
    );
  }
}

export default App;

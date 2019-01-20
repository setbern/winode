import 'babel-polyfill';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import logo from './logo.svg';
// import './App.css';
import winode from './redux/reducers';
import RedditWidget from './components/RedditWidget';
import StatusWidget from './components/StatusWidget';
import LightningPage from './pages/LightningPage';

const store = createStore(winode);

class App extends Component {
  render() {
    return (
      <div>
        <LightningPage />
      </div>
    );
  }
}

export default App;

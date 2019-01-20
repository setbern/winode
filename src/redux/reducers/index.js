import { combineReducers } from 'redux';

import reddit from './reddit';

const winode = combineReducers({
  reddit,
});

export default winode;
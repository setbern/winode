import { combineReducers } from 'redux';

import reddit from './reddit';

const rootReducer = combineReducers({
  reddit,
});

export default rootReducer;
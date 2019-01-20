import { combineReducers } from 'redux';

import reddit from './reddit';
import chart from './chart';

const rootReducer = combineReducers({
  reddit,
  chart
});

export default rootReducer;
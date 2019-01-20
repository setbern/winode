import { combineReducers } from 'redux';

import reddit from './reddit';
import chart from './chart';
import status from './status';

const rootReducer = combineReducers({
  reddit,
  status,
  chart,
});

export default rootReducer;
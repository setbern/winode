import { combineReducers } from 'redux';

import reddit from './reddit';
import chart from './chart';
import status from './status';
import environment from './environment';

const rootReducer = combineReducers({
  reddit,
  environment,
  status,
  chart,
});

export default rootReducer;
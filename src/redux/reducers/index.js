import { combineReducers } from 'redux';

import reddit from './reddit';
import status from './status';

const rootReducer = combineReducers({
  reddit,
  status,
});

export default rootReducer;
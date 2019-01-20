import { combineReducers } from 'redux';

import reddit from './reddit';
import chart from './chart';
import status from './status';
import transaction from './transaction';

const rootReducer = combineReducers({
  reddit,
  status,
  transaction,
  chart,
});

export default rootReducer;
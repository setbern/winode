import { combineReducers } from 'redux';

import reddit from './reddit';
import chart from './chart';
import status from './status';
import environment from './environment';
import transaction from './transaction';
import wallet from './wallet';

const rootReducer = combineReducers({
  reddit,
  environment,
  status,
  transaction,
  chart,
  wallet,
});

export default rootReducer;
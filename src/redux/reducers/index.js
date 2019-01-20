import { combineReducers } from 'redux';

import reddit from './reddit';
import status from './status';
import transaction from './transaction';

const rootReducer = combineReducers({
  reddit,
  status,
  transaction,
});

export default rootReducer;
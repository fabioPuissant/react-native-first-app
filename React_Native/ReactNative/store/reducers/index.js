import { combineReducers } from 'redux';
import roomreducer from './roomReducer';
import techReducer from './techReducer';

export default combineReducers({
  log: logReducer,
  tech: techReducer
});

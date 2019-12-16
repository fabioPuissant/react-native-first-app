import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import assetReducer from './assetReducer';
import ticketReducer from './ticketReducer';

export default combineReducers({
  room: roomReducer,
  asset: assetReducer,
  ticket: ticketReducer
});

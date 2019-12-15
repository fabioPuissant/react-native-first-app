import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import assetReducer from './assetReducer';

export default combineReducers({
  room: roomReducer,
  asset: assetReducer
});

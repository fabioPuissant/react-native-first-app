import {
  SET_LOADING,
  CLEAR_CURRENT_ASSET,
  ASSETS_ERROR,
  SET_CURRENT_ASSET,
  GET_ASSETS_OF_ROOM
} from '../constants/applicationConstants';
import { Asset } from 'react-native-unimodules';

const initialState = {
  assets: [],
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSETS_OF_ROOM:
      return {
        ...state,
        assets: action.payload
      };
    case ASSETS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case SET_CURRENT_ASSET:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_ASSET:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

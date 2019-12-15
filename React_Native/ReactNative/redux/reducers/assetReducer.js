import {
  SET_CURRENT,
  SET_LOADING,
  CLEAR_CURRENT,
  ASSETS_ERROR
} from '../constants/applicationConstants';

const initialState = {
  assets: [],
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ASSETS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
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

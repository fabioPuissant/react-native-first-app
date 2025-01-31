import {
  SET_LOADING,
  CLEAR_CURRENT_ASSET,
  ASSETS_ERROR,
  SET_CURRENT_ASSET,
  GET_ASSETS_OF_ROOM,
  ADD_TICKET_TO_ASSET,
  ALL_ASSETS
} from '../constants/applicationConstants';

const initialState = {
  assets: [],
  current: null,
  loading: false,
  error: null,
  addSucceeded: false,
  added: false
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
    case ADD_TICKET_TO_ASSET:
      return {
        ...state,
        addSucceeded: action.payload,
        added: !state.added
      };
    case ALL_ASSETS:
      return {
        ...state,
        assets: action.payload
      };
    default:
      return state;
  }
};

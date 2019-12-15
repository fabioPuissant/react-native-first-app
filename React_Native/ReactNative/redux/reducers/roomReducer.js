import Room from '../../models/Room';
import {
  GET_ROOMS,
  FIND_ROOM,
  CLEAR_CURRENT,
  SET_CURRENT,
  ROOMS_ERROR,
  SET_LOADING
} from '../constants/applicationConstants';

const initialState = {
  rooms: [],
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      console.log('Getting rooms now');
      return { ...state, rooms: action.payload };
    case FIND_ROOM:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT:
      return { ...state, current: null };
    case ROOMS_ERROR:
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

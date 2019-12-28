import Room from '../../models/Room';
import {
  GET_ROOMS,
  FIND_ROOM,
  CLEAR_CURRENT_ROOM,
  SET_CURRENT_ROOM,
  GET_ROOMS_HIGHER_OR_EQUAL_THAN,
  GET_ROOMS_LOWER_THAN,
  ROOMS_ERROR,
  SET_LOADING,
  ADD_HAPPINESS
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
      return { ...state, rooms: action.payload };
    case FIND_ROOM:
      return { ...state, current: action.payload };
    case CLEAR_CURRENT_ROOM:
      return { ...state, current: null };
    case ROOMS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case GET_ROOMS_LOWER_THAN:
      return {
        ...state,
        rooms: state.rooms.filter(r => r.happinessScore <= action.payload)
      };
    case GET_ROOMS_HIGHER_OR_EQUAL_THAN:
      return {
        ...state,
        rooms: state.rooms.filter(r => r.happinessScore >= action.payload)
      };
    case SET_CURRENT_ROOM:
      return {
        ...state,
        current: action.payload
      };
    case ADD_HAPPINESS:
      return {
        ...state,
        rooms: state.rooms.map(r =>
          r.id === action.payload.id ? action.payload : r
        )
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

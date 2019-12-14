import {
  GET_ROOMS,
  FIND_ROOM,
  CLEAR_CURRENT,
  SET_CURRENT,
  ROOMS_ERROR,
  SET_LOADING
} from '../constants/applicationConstants';

import { BASE_URL } from '../constants/baseUrl';

export const getRooms = () => async dispatch => {
  try {
    const url = `${BASE_URL}/rooms`;
    let response = await fetch('http://192.168.0.114:8000/rooms');
    let data = await response.json();
    console.log(JSON.stringify(data));
    dispatch({
      type: GET_ROOMS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ROOMS_ERROR,
      payload: error
    });
  }
};

// Set current log
export const setCurrent = room => {
  return {
    type: SET_CURRENT,
    payload: room
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

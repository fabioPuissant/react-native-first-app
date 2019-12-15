import {
  GET_ROOMS,
  FIND_ROOM,
  CLEAR_CURRENT,
  SET_CURRENT,
  ROOMS_ERROR,
  SET_LOADING
} from '../constants/applicationConstants';

import { BASE_URL } from '../constants/baseUrl';

const url = `${BASE_URL}/rooms`;

export const getRooms = () => async dispatch => {
  try {
    let response = await fetch(url);
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

// Find Room by name
export const findRoomByName = name => async dispatch => {
  try {
    const response = await fetch(`${url}?name=${name}`);
    const data = await response.json();

    dispatch({
      type: FIND_ROOM,
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
export const setCurrentRoom = room => {
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

import {
  GET_ROOMS,
  FIND_ROOM,
  GET_ROOMS_LOWER_THAN,
  CLEAR_CURRENT_ROOM,
  SET_CURRENT_ROOM,
  GET_ROOMS_HIGHER_OR_EQUAL_THAN,
  ROOMS_ERROR,
  SET_LOADING,
  ADD_HAPPINESS
} from '../constants/applicationConstants';

import { BASE_URL } from '../constants/baseUrl';

const url = `${BASE_URL}/rooms`;

export const getRooms = () => async dispatch => {
  try {
    let response = await fetch(url);
    let data = await response.json();
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

export const addHapinessScore = prop => async dispatch => {
  try {
    const postUrl = `${url}/addHapiness?name=${prop.roomName}&score=${prop.score}`;
    const resp = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prop)
    });

    const data = await resp.json();

    dispatch({
      type: ADD_HAPPINESS,
      payload: data
    });
    dispatch({
      type: SET_CURRENT_ROOM,
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

// Find rooms with happiness lower or equal than
export const findRoomWithHappinessLessThan = score => async dispatch => {
  try {
    dispatch({
      type: GET_ROOMS_LOWER_THAN,
      payload: score
    });
  } catch (error) {
    dispatch({
      type: ROOMS_ERROR,
      payload: error
    });
  }
};

// Find rooms with happiness higher or equal than
export const findRoomWithHappinessHigherThan = score => async dispatch => {
  try {
    dispatch({
      type: GET_ROOMS_HIGHER_OR_EQUAL_THAN,
      payload: score
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
    type: SET_CURRENT_ROOM,
    payload: room
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT_ROOM
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

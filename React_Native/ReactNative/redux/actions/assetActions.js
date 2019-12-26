import {
  GET_ASSETS_OF_ROOM,
  CLEAR_CURRENT_ASSET,
  SET_CURRENT_ASSET,
  ASSETS_ERROR,
  SET_LOADING
} from '../constants/applicationConstants';

import { BASE_URL } from '../constants/baseUrl';

const url = `${BASE_URL}/assets`;

// Find Assets of room
export const findAssetsOfRoom = room => async dispatch => {
  try {
    const roomId = room.id;

    const resp = await fetch(`${url}?roomId=${roomId}`);
    const data = await resp.json();

    dispatch({
      type: GET_ASSETS_OF_ROOM,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ASSETS_ERROR,
      payload: error
    });
  }
};

// Set current asset
export const setCurrentAsset = asset => {
  return {
    type: SET_CURRENT_ASSET,
    payload: asset
  };
};

// Clear current asset
export const clearCurrentAsset = () => {
  return {
    type: CLEAR_CURRENT_ASSET
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

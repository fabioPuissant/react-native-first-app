import {
  GET_ROOMS,
  FIND_ROOM,
  CLEAR_CURRENT,
  SET_CURRENT,
  ASSET_ERROR,
  SET_LOADING
} from '../constants/applicationConstants';

import { BASE_URL } from '../constants/baseUrl';

const url = `${BASE_URL}/assets`;

// Set current asset
export const setCurrentAsset = asset => {
  return {
    type: SET_CURRENT,
    payload: asset
  };
};

// Clear current asset
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

import {
  TICKETS_ERROR,
  GET_TICKETS_OF_ASSET,
  GET_TICKETS,
  UPVOTE_TICKET,
  SET_CURRENT_TICKET,
  DELETE_TICKET
} from '../constants/applicationConstants';

import { BASE_URL } from '../constants/baseUrl';

const url = `${BASE_URL}/tickets`;

export const getTickets = () => async dispatch => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    dispatch({
      type: GET_TICKETS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TICKETS_ERROR,
      payload: error
    });
  }
};

export const getTicketsOfAsset = assetId => async dispatch => {
  try {
    const resp = await fetch(`${url}?assetId=${assetId}`);
    const data = await resp.json();

    dispatch({
      type: GET_TICKETS_OF_ASSET,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TICKETS_ERROR,
      payload: error
    });
  }
};

export const deleteTicket = id => async dispatch => {
  try {
    await fetch(`${url}/delete?id=${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_TICKET,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: TICKETS_ERROR,
      payload: error
    });
  }
};

export const setCurrentTicket = ticket => async dispatch => {
  try {
    dispatch({
      type: SET_CURRENT_TICKET,
      payload: ticket
    });
  } catch (error) {
    dispatch({
      type: TICKETS_ERROR,
      payload: error
    });
  }
};

export const upVoteTicket = ticket => async dispatch => {
  try {
    const upvoteUrl = `${url}/raiseVote?ticketId=${ticket.id}`;

    const resp = await fetch(upvoteUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ticket.id)
    });
    const data = await resp.json();
    dispatch({
      type: UPVOTE_TICKET,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TICKETS_ERROR,
      payload: error
    });
  }
};

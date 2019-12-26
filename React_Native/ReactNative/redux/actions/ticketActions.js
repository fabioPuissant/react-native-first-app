import {
  TICKETS_ERROR,
  GET_TICKETS_OF_ASSET,
  GET_TICKETS,
  UPVOTE_TICKET
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

export const upVoteTicket = ticket => async dispatch => {
  try {
    const resp = await fetch(`${ticket}/raiseVote`, {
      method: 'POST',
      body: {
        ticketId: ticket.id
      },
      headers: {
        'Content-Type': 'application/json'
      }
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

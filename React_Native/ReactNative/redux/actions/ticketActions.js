import {
  TICKETS_ERROR,
  GET_TICKETS_OF_ASSET,
  UPVOTE_TICKET
} from '../constants/applicationConstants';

import { BASE_URL } from '../constants/baseUrl';

const url = `${BASE_URL}/tickets`;

export const getTickets = () => async dispatch => {
  try {
    const resp = await fetch(url);
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

export const getTicketsOfAsset = assetId => async dispatch => {
  try {
<<<<<<< HEAD
    const resp = await fetch(`${url}?assetId=${assetId}`);
=======
    const resp = await fetch(
      `${BASE_URL}/tickets?assetId=${assetId}`
    );
>>>>>>> 2a87eab94a62efd059d37098532805111c6cf391
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

import {
  TICKETS_ERROR,
  GET_TICKETS_OF_ASSET,
  UPVOTE_TICKET
} from '../constants/applicationConstants';

import BASE_URL from '../constants/baseUrl';

export const getTickets = () => async dispatch => {
  try {
    const resp = await fetch(`http://192.168.0.114:8000/tickets`);
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
    const resp = await fetch(
      `http://192.168.0.114:8000/tickets?assetId=${assetId}`
    );
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

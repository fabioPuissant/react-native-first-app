import {
  TICKETS_ERROR,
  GET_TICKETS_OF_ASSET,
  UPVOTE_TICKET
} from '../constants/applicationConstants';

import BASE_URL from '../constants/baseUrl';

const ticketUrl = `${BASE_URL}/tickets`;
const assetTicketUrl = `${BASE_URL}/assets?name=`;

export const findTicketsOfAsset = asset => async dispatch => {
  try {
    const specificUrl = `${assetTicketUrl}${asset.name}`;
    console.log(
      'TicketActions.findTicketsOfAsset: specificUrl= ' + specificUrl
    );
    const resp = await fetch(specificUrl);
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

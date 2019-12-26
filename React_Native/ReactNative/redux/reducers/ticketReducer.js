import {
  TICKETS_ERROR,
  GET_TICKETS_OF_ASSET,
  GET_TICKETS,
  UPVOTE_TICKET
} from '../constants/applicationConstants';

const initialState = {
  tickets: [],
  allTickets: [],
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS_OF_ASSET:
      return {
        ...state,
        tickets: action.payload
      };
    case GET_TICKETS:
      return {
        ...state,
        allTickets: action.payload
      };
    case UPVOTE_TICKET:
      const ticket = action.payload;
      const tickets = state.tickets.map(t => (t.id === ticket.id ? ticket : t));
      return {
        ...state,
        tickets: tickets
      };
    case TICKETS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

const SET_TICKETS = "SET_TICKETS";
const ADD_TICKET = "ADD_TICKET";
const DELETE_TICKET = "DELETE_TICKET";
const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY";
const defaultState = {
  tickets: [],
  popupDisplay: "none",
};

export default function ticketReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TICKETS:
      return { ...state, tickets: action.payload };

    case ADD_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };

    case SET_POPUP_DISPLAY:
      return { ...state, popupDisplay: action.payload };

    case DELETE_TICKET:
      return {
        ...state,
        tickets: [
          ...state.tickets.filter((ticket) => ticket._id != action.payload),
        ],
      };

    default:
      return state;
  }
}

export const setTickets = (tickets) => ({
  type: SET_TICKETS,
  payload: tickets,
});
export const addTicket = (ticket) => ({ type: ADD_TICKET, payload: ticket });
export const setPopupDisplay = (display) => ({
  type: SET_POPUP_DISPLAY,
  payload: display,
});
export const deleteTicket = (ticketId) => ({
  type: DELETE_TICKET,
  payload: ticketId,
});

import axios from "axios";
import { hideLoader, showLoader } from "../reducers/appReducer";
import { addTicket, setTickets, deleteTicket } from "../reducers/ticketReducer";

export function getTickets() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await axios.get("http://localhost:5000/api/tickets", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setTickets(response.data));
      // console.log("object");
    } catch (e) {
      alert(e.response.data.message);
    } finally {
      dispatch(hideLoader());
    }
  };
}

export function createTickets(name, type) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tickets",
        {
          name,
          type,
          key: Math.floor(Math.random() * (1000 - 100)) + 100,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(addTicket(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
}

export function deleteTickets(ticket) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/tickets?id=${ticket._id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(deleteTicket(ticket._id));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
}

export function searchTickets(search) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/tickets/search?search=${search}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      dispatch(setTickets(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
}

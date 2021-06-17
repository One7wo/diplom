import React, { useEffect, useState, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import "../TicketList.scss";
import { useDispatch, useSelector } from "react-redux";

import { Ticket, Generator, Search } from "../Components";
import { logout } from "../reducers/userReducer";
import { createTickets, getTickets } from "../actions/ticket";
import { addTicket, setPopupDisplay } from "../reducers/ticketReducer";
import Popup from "../Components/Popup/Popup";

export default function TicketList() {
  // const isAuth = useSelector((state) => state.user.isAuth);

  const tickets = useSelector((state) => state.tickets.tickets);
  const loader = useSelector((state) => state.app.loader);
  // const countList = tickets.length;
  const [count, setCount] = useState(tickets.length);
  console.log("tickets len", tickets.length);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [count]); // tickets

  // useEffect(() => {
  //   dispatch(getTickets());
  // }, [dispatch, count]);
  console.log("list rerender", count);

  const [searchName, setSearchName] = useState("");

  const showPopupHandler = () => {
    dispatch(setPopupDisplay("flex"));
  };

  // if (!loader === true) {
  //   return (
  //     <div className="loader">
  //       <div class="lds-dual-ring"></div>
  //     </div>
  //   );
  // }
  return (
    <>
      <div className="wrapper-list">
        <div className="header">
          <div className="header__logo">AES</div>
          <div className="text-r exit" onClick={() => dispatch(logout())}>
            <NavLink to="/login">Exit</NavLink>
          </div>
        </div>
        <div className="inner out">
          <Search value={searchName} setValue={setSearchName} />
          <Generator />
        </div>

        <div className="out">
          <div className="list">
            {tickets.map((ticket, i) => (
              <Ticket ticket={ticket} key={i} keyId={ticket.key} />
            ))}

            <div
              className="add-ticket"
              onClick={() => {
                showPopupHandler();
                setCount(tickets.length);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <Popup count={count} setCount={setCount} />
    </>
  );
}

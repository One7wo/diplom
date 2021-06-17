import React, { useState } from "react";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { setPopupDisplay } from "../../reducers/ticketReducer";
import { createTickets } from "../../actions/ticket";

export default function Popup({ count, setCount }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const popupDisplay = useSelector((state) => state.tickets.popupDisplay);

  function createHandler() {
    dispatch(createTickets(name, type));
  }

  const dispatch = useDispatch();
  console.log("popup rerender", count);
  return (
    <div
      className="popup"
      style={{ display: popupDisplay }}
      onClick={() => dispatch(setPopupDisplay("none"))}
    >
      <div
        className="popup__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="delete"
          onClick={() => dispatch(setPopupDisplay("none"))}
        >
          <div className="text-b">×</div>
        </div>
        <div className="text-r">Ticket name</div>

        <div className="input">
          <Input value={name} setValue={setName} type="text" />
        </div>

        <div className="text-r ">Type serves</div>

        <div className="input">
          <Input value={type} setValue={setType} type="text" />
        </div>
        <div
          className="login-button"
          onClick={() => {
            createHandler();
            dispatch(setPopupDisplay("none"));
            setName("");
            setType("");
            setCount(count++);
            console.log(count);
          }}
        >
          Create ticket
        </div>
      </div>
    </div>
  );
}

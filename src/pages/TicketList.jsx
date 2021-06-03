import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../TicketList.scss";
import copy from "../assets/img/copy.svg";
// import pen from '../assets/img/pen.svg'
// import wand from '../assets/img/magic-wand.svg'
import check from "../assets/img/check.svg";

import { Ticket, Generator, Search } from "../Components";

export default function TicketList() {
  const [items, setItems] = useState([
    // {
    //   id: 1,
    //   name: "",
    //   serves: "",
    //   key: Math.floor(Math.random() * (100 - 10)) + 10,
    // },
  ]);

  const updateTicketName = (id, data) => {
    items[id].name = data;
  };

  const updateTicketServes = (key, data) => {
    items[key - 1].serves = data;
  };
  const deleteTicket = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    console.log(id, newItems);
    setItems(newItems);
  };
  console.log("rerender", items);
  return (
    <div className="wrapper-list">
      <div className="header">
        <div className="header__logo">AES</div>
      </div>
      <div className="inner out">
        <Search />
        <Generator />
      </div>
      <div className="out">
        <div className="list">
          {items.map((item, index) => (
            <div className="list__ticket" key={index}>
              {console.log("id l", item.id, item)}
              <Ticket
                name={item.name}
                serves={item.serves}
                id={item.id}
                updateTicketName={updateTicketName}
                updateTicketServes={updateTicketServes}
                deleteTicket={deleteTicket}
                isRemovable
              />
            </div>
          ))}

          <div
            className="add-ticket"
            onClick={() => {
              const newItems = [
                ...items,
                {
                  id: items.length > 0 ? items[items.length - 1].id + 1 : 0,
                  name: "",
                  serves: "",
                  key: Math.floor(Math.random() * (100 - 10)) + 10,
                },
              ];
              setItems(newItems);
            }}
          >
            +
          </div>
        </div>
      </div>

      {/* <Link to="/" >
                <h1>Pepegga</h1>
            </Link> */}
    </div>
  );
}

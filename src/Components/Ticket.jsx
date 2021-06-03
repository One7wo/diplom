import React, { useState } from "react";
import copy from "../assets/img/copy.svg";
import pen from "../assets/img/pen.svg";
// import wand from '../assets/img/magic-wand.svg'
import check from "../assets/img/check.svg";

export default function Ticket({
  deleteTicket,
  name,
  serves,
  updateTicketName,
  updateTicketServes,
  id,
}) {
  const [toggleName, setToggleName] = useState(false);
  const [toggleServes, setToggleServes] = useState(false);
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueServes, setInputValueServes] = useState("");
  const [nameValue, setNameValue] = useState(name);
  const [servesValue, setServesValue] = useState(serves);

  return (
    // <div className="list__ticket">
    <>
      <div
        className="delete"
        onClick={() => {
          console.log(id);
          deleteTicket(id);
        }}
      >
        <div className="text-b">X</div>
      </div>
      <div className="name">
        <div className="text-line">
          <div className="text-r">Name:</div>
          <div
            className={
              !toggleName ? "text-r ticket-name visible" : "text-r ticket-name"
            }
          >
            {nameValue}
          </div>
        </div>
        <input
          type="text"
          placeholder="Enter and save name"
          className={toggleName ? "visible" : ""}
          value={inputValueName}
          onChange={(e) => setInputValueName(e.target.value)}
        />
        <div
          className={!toggleName ? "change-button visible" : "change-button"}
          onClick={() => setToggleName(false)}
        >
          <img src={pen} alt="change" />
        </div>
        <div
          className={toggleName ? "apply-button visible" : "apply-button"}
          onClick={() => {
            setToggleName(true);
            setNameValue(inputValueName);
            updateTicketName(id, inputValueName);
            console.log(toggleName);
          }}
        >
          <img src={check} alt="apply" />
        </div>
      </div>
      <div className="type">
        <div className="text-line">
          <div className="text-b">Serves:</div>
          <div
            className={
              !toggleServes ? "text-r type-name visible" : "text-r type-name"
            }
          >
            {servesValue}
          </div>
        </div>
        <input
          type="text"
          placeholder="Enter name serves"
          className={toggleServes ? "visible" : ""}
          value={inputValueServes}
          onChange={(e) => setInputValueServes(e.target.value)}
        />

        <div
          className={!toggleServes ? "change-button visible" : "change-button"}
          onClick={() => setToggleServes(false)}
        >
          <img src={pen} alt="change" />
        </div>
        <div
          className={toggleServes ? "apply-button visible" : "apply-button"}
          onClick={() => {
            setToggleServes(true);
            setServesValue(inputValueServes);
            console.log(toggleServes);
          }}
        >
          <img src={check} alt="apply" />
        </div>
      </div>
      <div className="password">
        <div className="text-r">Get password</div>

        <div className="key-form">
          <input type="text" placeholder="Your Keyword" />
          <div className="apply-button">
            <img src={check} alt="apply" />
          </div>
        </div>

        <div className="password-form">
          <input type="text" disabled />
          <div className="copy-button! disabled">
            <img src={copy} alt="copy" />
          </div>
        </div>
      </div>
    </>
    // </div>
  );
}

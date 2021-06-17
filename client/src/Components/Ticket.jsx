import React, { useState } from "react";
import copy from "../assets/img/copy.svg";
import check from "../assets/img/check.svg";
import { useDispatch } from "react-redux";
import { deleteTickets } from "../actions/ticket";
import Input from "./Input";

const aesjs = require("aes-js");

export default React.memo(function Ticket({ name, type, keyId, ticket }) {
  const dispatch = useDispatch();

  const [keyWord, setKeyWord] = useState("");
  const [pass, setPass] = useState("");

  const deleteClickHandler = (e) => {
    e.stopPropagation();
    dispatch(deleteTickets(ticket));
  };

  const generatePass = (name, type, keys, keyWord) => {
    var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const textBytes = aesjs.utils.utf8.toBytes(
      `${keyWord}${name}${type}${keys}`
    );

    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    const encryptedBytes = aesCtr.encrypt(textBytes);
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    setPass(encryptedHex);
  };
  // console.log("key", keyId);
  return (
    <div className="list__ticket">
      <>
        <div className="delete" onClick={(e) => deleteClickHandler(e)}>
          <div className="text-b">x</div>
        </div>
        <div className="name">
          <div className="text-line">
            <div className="text-r">Name:</div>
            <div className={"text-b type-name"}>{ticket.name}</div>
          </div>
        </div>
        <div className="type">
          <div className="text-line">
            <div className="text-r">Serves:</div>
            <div className={"text-r type-name"}>{ticket.type}</div>
          </div>
        </div>
        <div className="password">
          <div className="text-r">Get password</div>

          <div className="key-form">
            <Input
              type="text"
              placeholder="Your Keyword"
              value={keyWord}
              setValue={setKeyWord}
            />
            <div
              className="apply-button"
              onClick={() =>
                generatePass(ticket.name, ticket.type, keyId, keyWord)
              }
            >
              <img src={check} alt="apply" />
            </div>
          </div>

          <div className="password-form">
            <input type="text" value={pass} disabled />
            <div
              onClick={() => {
                navigator.clipboard.writeText(pass);
              }}
              className={pass ? "copy-button" : "disabled"}
            >
              <img src={copy} alt="copy" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
});

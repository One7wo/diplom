import React from "react";
import { useDispatch } from "react-redux";
import { searchTickets } from "../actions/ticket";

export default function Search({ value, setValue }) {
  const dispatch = useDispatch();
  function searchChangeHandler(e) {
    setValue(e.target.value);
    dispatch(searchTickets(e.target.value));
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name and service"
        value={value}
        onChange={(e) => searchChangeHandler(e)}
      ></input>
    </div>
  );
}

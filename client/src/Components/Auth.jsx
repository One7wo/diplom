import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Input from "./Input";
import { login } from "../actions/user";
import { useDispatch } from "react-redux";

export default function Auth() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div className="text-r">Username</div>

      <div className="input">
        <Input value={userName} setValue={setUserName} type="text" />
      </div>

      <div className="text-r ">Password</div>

      <div className="input">
        <Input value={password} setValue={setPassword} type="password" />
      </div>
      {/* <Link to="/TicketList"> */}
      <div
        className="login-button"
        onClick={() => dispatch(login(userName, password))}
      >
        Sign in
      </div>
      {/* </Link> */}

      <div className="create-acc">
        <div className="text-l">
          <NavLink to="/registration">Create account</NavLink>
        </div>
      </div>
    </div>
  );
}

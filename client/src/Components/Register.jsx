import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registration } from "../actions/user";
import Input from "./Input";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="outher">
      <div className="logo">
        <div className="text-l">PEPEGA</div>
      </div>
      <div className="wrapper">
        <Link to="/login">
          <div className=" back">
            <div className="text-r">{"<"}</div>
          </div>
        </Link>

        <div className="text-r">Username</div>

        <div className="input">
          <Input value={userName} setValue={setUserName} type="text" />
        </div>

        <div className="text-r ">Password</div>

        <div className="input">
          <Input value={password} setValue={setPassword} type="password" />
        </div>

        {userName.length > 2 &&
        userName < 15 &&
        password.length > 2 &&
        password < 13 ? (
          <Link to="/">
            <div
              className="login-button"
              onClick={() => registration(userName, password)}
            >
              Create
            </div>
          </Link>
        ) : (
          <div
            className="login-button"
            onClick={() => registration(userName, password)}
          >
            Create
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";

import {
  Route,
  Router,
  BrowserRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import { Login, TicketList } from "./pages";
import { Register } from "./Components";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./actions/user";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <>
        {!isAuth ? (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Register} />
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={TicketList} />
            <Redirect to="/" />
          </Switch>
        )}
      </>
    </BrowserRouter>
  );
}

export default App;

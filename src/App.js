import React from "react";

import { Route, Router } from "react-router-dom";
import { Login, TicketList } from "./pages";
import { Register } from "./Components";

function App() {
  return (
    <>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/ticketlist" component={TicketList} exact />
    </>
  );
}

export default App;

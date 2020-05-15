import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Comics from "./containers/Comics";
import Home from "./containers/Home";
import Character from "./containers/Character";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />>
      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home.js";
import WorkHistory from "./components/workHistory.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work-history" component={WorkHistory} />
        </Switch>
      </div>
    );
  }
}

export default App;

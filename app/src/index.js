import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./App";
import Login from "./screens/login";
import IInput from "./screens/input/input";
import Landing from "./screens/landing/landing";
import Signup from "./screens/signup";


ReactDOM.render(
  <Router>
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/input" component={IInput} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />

    </div>
  </Router>,
  document.getElementById("root")
);
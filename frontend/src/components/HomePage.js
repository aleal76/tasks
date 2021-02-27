  
import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import Add from "./Add";
import Edit from "./Edit";
import {
    BrowserRouter as Router, 
    Switch, Route, 
    Link, 
    Redirect 
    } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">  <p>Aquí página principal </p>  </Route>
                <Route path="/Add" component={Add} />  
                <Route path="/Edit" component={Edit} />                 
            </Switch>
        </Router>       
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
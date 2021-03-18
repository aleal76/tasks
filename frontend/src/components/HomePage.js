
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
        <div className="App">
          <nav class="navbar navbar-default">
            <div class="container">
              <div class="navbar-header">
                <a class="navbar-brand" href="#"> Logo </a>
              </div>
              <ul class="nav navbar-nav">
                
                <li class="active">  <Link to="/">Home</Link> </li>
                <li>  <Link to="/add">Agregar Tarea</Link> </li>
                <li> <Link to="/edit">Modificar Tareas</Link> </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">  </Route>
            <Route path="/Add" component={Add} />
            <Route path="/Edit" component={Edit} /> 
          </Switch>
        </div>
      </Router >
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
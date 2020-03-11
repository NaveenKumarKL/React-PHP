import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Insert from "./component/Insert";
import View from "./component/View";
import Edit from "./component/Edit";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link " to={"/"}>
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/insert"}>
                insert
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/view"}>
                view
              </Link>
            </li>
          </ul>
        </nav>
        <h2>React-crud</h2>
        <Switch>
          <Route exact path="/insert" component={Insert} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/view" component={View} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

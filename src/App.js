import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./page/Home";
import Parent from "./page/Parent";
import Child from "./page/Child";
import NotFound from "./page/NotFound";
import TabbedChild from "./page/TabbedChild";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/parent">Parent</NavLink>
          </li>
          <li>
            <NavLink to="/child">Child</NavLink>
          </li>
        </ul> */}

        <Switch>
          <Route exact path="/" componrn={Home} />
          <Route path="/parent" component={Parent} />
          <Route path="/child" component={Child} />
          <Route path="/tabbed-child" component={TabbedChild} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

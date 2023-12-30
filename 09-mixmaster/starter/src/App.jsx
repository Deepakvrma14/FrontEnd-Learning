import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const About = () => <h1>About</h1>;
const Users = () => <h1>Users</h1>;

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
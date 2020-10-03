import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;

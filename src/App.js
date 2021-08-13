import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
    );
  }
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import TestMessage from './pages/TestMessage/TestMessage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/test-message" component={TestMessage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import TestMessage from './pages/TestMessage/TestMessage';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import ResetPasswordRequest from './pages/ResetPasswordRequest/ResetPasswordRequest';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Error from './pages/Error/Error';
import NoAccess from './pages/NoAccess/NoAccess';

var client = {
  user_id: sessionStorage.getItem("user_token"),
  session_token: sessionStorage.getItem("session_access_token")
}

console.log(client);

function App() {

  if (client.user_id && client.session_token) {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route exact path="/test-message" component={TestMessage} />
            <Route exact path="/reset-password-request" component={ResetPasswordRequest} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route component={NoAccess} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

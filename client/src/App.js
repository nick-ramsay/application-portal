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

const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
} //Function to get a specific cookie. Source: W3Schools

var client = {
  user_id: getCookie("user_token"),
  session_token: getCookie("session_access_token")
}

function App() {

  if (client.user_id && client.session_token) {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route exact path="/reset-password-request" component={ResetPasswordRequest} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/" component={Home} />
            <Route exact path="/test-message" component={TestMessage} />
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
            <Route exact path="/reset-password-request" component={ResetPasswordRequest} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route component={NoAccess} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

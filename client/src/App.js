import React from "react";
import { getCookie } from "./SharedFunctions/SharedFunctions";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TestMessage from "./pages/TestMessage/TestMessage";
import CreateAccountRequest from "./pages/CreateAccountRequest/CreateAccountRequest";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ResetPasswordRequest from "./pages/ResetPasswordRequest/ResetPasswordRequest";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Error from "./pages/Error/Error";
import NoAccess from "./pages/NoAccess/NoAccess";
import moment from "moment";

//var GoogleStrategy = require("passport-google-oauth2").Strategy;

var client = {
  user_id: "",
  session_token: "",
  auth_expiry: "",
};

const setClientTokenObject = () => {
  client = {
    user_id: getCookie("user_token"), //getCookie("user_token"),
    session_token: getCookie("session_access_token"),
    auth_expiry: getCookie("auth_expiry"),
  };
};

function App() {
  setClientTokenObject();

  const checkTokenExpiration = () => {
    setClientTokenObject();

    if ((client.user_id || client.session_token) && client.auth_expiry) {
      let authSecondsRemaining = moment(client.auth_expiry).diff(
        moment(),
        "seconds"
      );

      if (authSecondsRemaining === 300) {
        //alert("Only five minutes remain on this session before you are automatically logged out. Would you like to stay logged in?");
        let openModalButton = document.getElementById(
          "open-auth-timeout-modal-btn"
        );

        openModalButton.click();
      } else if (authSecondsRemaining === 0) {
        document.cookie = "user_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie =
          "session_access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie =
          "auth_expiry=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.href = "/";
      }
    }
  };

  setInterval(checkTokenExpiration, 1000);

  if (client.user_id && client.session_token) {
    return (
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/create-account" element={<CreateAccount/>} />
          <Route
            exact
            path="/reset-password-request"
            element={<ResetPasswordRequest/>}
          />
          <Route exact path="/reset-password" element={<ResetPassword/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/test-message" element={<TestMessage/>} />
          <Route element={<Error/>} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route
              exact
              path="/create-account-request"
              element={<CreateAccountRequest/>}
            />
            <Route exact path="/create-account" element={<CreateAccount/>} />
            <Route
              exact
              path="/reset-password-request"
              element={<ResetPasswordRequest/>}
            />
            <Route exact path="/reset-password" element={<ResetPassword/>} />
            <Route element={<NoAccess/>} />
            </Routes>
      </Router>
    );
  }
}

export default App;

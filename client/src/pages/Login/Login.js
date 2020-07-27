import React, { useState } from 'react';
import { sha256 } from 'js-sha256';
import "./style.css";
import API from "../../utils/API";
import GithubLogo from "../../images/GitHub_Logo.png";

const Login = () => {
    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return [value, handleChange];
    } //This dynamicaly sets react hooks as respective form inputs are updated...

    var [email, setEmail] = useInput("");
    var [password, setPassword] = useInput("");
    var [submissionMessage, setSubmissionMessage] = useState("");

    const login = () => {
        let encryptedPassword = sha256(password);

        let sessionAccessToken = Math.floor((Math.random() * 999999) + 100000);
        let encryptedSessionAccessToken = sha256(sessionAccessToken.toString())

        if (email && password) {
            API.login(email, encryptedPassword).then(
            res => {
                if (res.data) {
                    setSubmissionMessage(submissionMessage => "");
                    sessionStorage.setItem("user_token", res.data._id);
                    document.cookie='user_token=' + res.data._id;
                    API.setSessionAccessToken(res.data._id, encryptedSessionAccessToken).then(res => {
                        sessionStorage.setItem("session_access_token", encryptedSessionAccessToken);
                        document.cookie="session_access_token=" + encryptedSessionAccessToken;
                        window.location.href=("/")
                    })
                        
                } else {
                    setSubmissionMessage(submissionMessage => "Hmm... this is incorrect. Enter your username and password again.");
                }
            }
            )} else {
            setSubmissionMessage(submissionMessage => "Please complete all fields");
        }
    }

    return (
        <div>
            <div className="container">
                <div className="col-md-12 mt-2">
                    <h3 className="text-center mb-5"><strong>Welcome to the Communication Portal</strong></h3>
                    <form className="p-3">
                        <h6 className="text-center"><strong>Login</strong></h6>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" onChange={setEmail} aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" onChange={setPassword} id="exampleInputPassword1" />
                        </div>
                        <button type="button" id="login-btn" name="login-btn" onClick={login} className="btn btn-sm">Submit</button>
                        <div className="mt-3 mb-1">
                            <a href="/create-account">New to Communication Portal? Create an account here!</a>
                        </div>
                        <div>
                            <a href="/reset-password-request">Forgot password? Reset here!</a>
                        </div>
                        <div className="form-group text-center">
                            <p className="submission-message" name="submissionMessage">{submissionMessage}</p>
                        </div>
                    </form>
                </div>
                <footer className="footer mt-5">
                    <div className="container text-center">
                        <a href="https://github.com/nick-ramsay/application-portal" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} alt="Github Logo" width="60px" /></a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Login;
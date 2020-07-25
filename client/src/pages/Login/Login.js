import React, { Component } from "react";
import "./style.css";
import GithubLogo from "../../images/GitHub_Logo.png";

class Login extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 mt-2">
                        <h3 className="text-center mb-5"><strong>Welcome to the Communication Portal</strong></h3>
                        <form className="p-3">
                            <h6 className="text-center"><strong>Login</strong></h6>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="button" className="btn btn-sm">Submit</button>
                            <div className="mt-3 mb-1">
                                <a href="/create-account">New to Communication Portal? Create an account here!</a>
                            </div>
                            <div>
                                <a href="/reset-password-request">Forgot password? Reset here!</a>
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

}

export default Login;
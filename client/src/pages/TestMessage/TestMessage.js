import React, { Component } from "react";
import "./style.css";
import GithubLogo from "../../images/GitHub_Logo.png";

class TestMessage extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 mt-2">
                        <a href="/">&#8592;</a>
                        <h3 className="text-center mb-5"><strong>Submit a Test Message</strong></h3>
                        <form className="login-form p-3">
                            <div className="form-group">
                                <label for="testEmail">Email address</label>
                                <input type="email" className="form-control" id="testEmail" aria-describedby="testEmailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="testPhone">Phone</label>
                                <input type="phone" className="form-control" id="testPhone" aria-describedby="testPhoneHelp" />
                            </div>
                            <div className="form-group">
                                <label for="testMessage">Message</label>
                                <textarea className="form-control" id="testMessage" />
                            </div>
                            <button type="button" className="btn btn-sm">Submit</button>
                        </form>
                    </div>
                </div>

                <footer className="footer mt-5">
                    <div className="container text-center">
                        <a href="https://github.com/nick-ramsay/application-portal" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} alt="Github Logo" width="60px" /></a>
                    </div>
                </footer>

            </div>
        )
    }

}

export default TestMessage;
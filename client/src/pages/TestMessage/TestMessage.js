import React, { Component } from "react";
import "./style.css";
import GithubLogo from "../../images/GitHub_Logo.png";
import API from "../../utils/API";

class TestMessage extends Component {


    homeBtn = () => {
        window.location.href="/";
    }

    sendDummyEmail = () => {
        alert("Clicked save dummy email...");
        API.sendDummyEmail().then(console.log("Email success..."))
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 mt-2">
                        <button className="btn btn-sm" onClick={this.homeBtn}><strong>&#129092; Back</strong></button>
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
                            <button type="button" className="btn btn-sm mr-2">Submit</button>
                            <button type="button" className="btn btn-sm" name="sendDummyEmail" id="sendDummyEmail" onClick={this.sendDummyEmail}>Dummy Test E-Mail</button>
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
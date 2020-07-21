//import React, { Component } from "react";
import React, { useState, useEffect } from 'react';
import "./style.css";
import GithubLogo from "../../images/GitHub_Logo.png";
import API from "../../utils/API";


const TestMessage = () => {

    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        console.log(value);
        return [value, handleChange];
    } //This dynamicaly sets react hooks as respective form inputs are updated...

    var [testEmailAddress, setTestEmailAddress] = useInput("");
    var [testSubject, setTestSubject] = useInput("");
    var [testPersonName, setTestPersonName] = useInput("");
    var [testMessage, setTestMessage] = useInput("");

    const homeBtn = () => {
        window.location.href = "/";
    }

    const sendTestEmail = () => {
        alert("Clicked save test email...");
        if (testPersonName !== "" && testEmailAddress !== "" && testSubject !== "" && testMessage !== "") {
            API.sendTestEmail({ senderName: testPersonName, recipientEmail: testEmailAddress, subject: testSubject, message: testMessage }).then(res => console.log(res));
        } else {
            alert("Please complete all fields on form...")
        }
    }

    return (
        <div>
            <div className="container">
                <div className="col-md-12 mt-2">
                    <button className="btn btn-sm" onClick={homeBtn}><strong>&#129092; Back</strong></button>
                    <h3 className="text-center mb-5"><strong>Submit a Test Message</strong></h3>
                    <form className="login-form p-3">
                        <div className="form-group">
                            <label for="testPersonName">Your Name</label>
                            <input type="text" className="form-control" id="testPersonName" aria-describedby="testPersonNameHelp" name="testPersonName" onChange={setTestPersonName} />
                        </div>
                        <div className="form-group">
                            <label for="testEmailAddress">Recipient Email Address</label>
                            <input type="email" className="form-control" id="testEmailAddress" aria-describedby="testEmailAddressHelp" name="testEmailAddress" onChange={setTestEmailAddress} />
                        </div>
                        <div className="form-group">
                            <label for="testPhone">Subject</label>
                            <input type="text" className="form-control" id="testSubject" aria-describedby="testSubjectHelp" name="testSubject" onChange={setTestSubject} />
                        </div>
                        <div className="form-group">
                            <label for="testMessage">Message</label>
                            <textarea className="form-control" id="testMessage" name="testMessage" onChange={setTestMessage} />
                        </div>
                        <button type="button" className="btn btn-sm mr-2" name="sendTestEmail" id="sendTestEmail" onClick={sendTestEmail}>Submit</button>
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

export default TestMessage;
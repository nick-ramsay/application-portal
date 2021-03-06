import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import "./style.css";
import API from "../../utils/API";


const TestMessage = () => {

    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return [value, handleChange];
    } //This dynamicaly sets react hooks as respective form inputs are updated...

    var [testEmailAddress, setTestEmailAddress] = useInput("");
    var [testSubject, setTestSubject] = useInput("");
    var [testPersonName, setTestPersonName] = useInput("");
    var [testMessage, setTestMessage] = useInput("");

    const sendEmail = () => {
        alert("Clicked save test email...");
        if (testPersonName !== "" && testEmailAddress !== "" && testSubject !== "" && testMessage !== "") {
            API.sendEmail({ senderName: testPersonName, recipientEmail: testEmailAddress, subject: testSubject, message: testMessage })
            .then(res => console.log(res));
        } else {
            alert("Please complete all fields on form...")
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="col-md-12 mt-2">
                    <h5 className="text-center mb-3 mt-3"><strong>Submit a Test Message</strong></h5>
                    <form className="p-3">
                        <div className="form-group">
                            <label htmlFor="testPersonName">Your Name</label>
                            <input type="text" className="form-control" id="testPersonName" aria-describedby="testPersonNameHelp" name="testPersonName" onChange={setTestPersonName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="testEmailAddress">Recipient Email Address</label>
                            <input type="email" className="form-control" id="testEmailAddress" aria-describedby="testEmailAddressHelp" name="testEmailAddress" onChange={setTestEmailAddress} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="testPhone">Subject</label>
                            <input type="text" className="form-control" id="testSubject" aria-describedby="testSubjectHelp" name="testSubject" onChange={setTestSubject} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="testMessage">Message</label>
                            <textarea className="form-control" id="testMessage" name="testMessage" onChange={setTestMessage} />
                        </div>
                        <button type="button" className="btn btn-sm mr-2" name="sendTestEmail" id="sendTestEmail" onClick={sendEmail}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TestMessage;
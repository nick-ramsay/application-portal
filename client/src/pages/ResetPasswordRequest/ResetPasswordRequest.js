import React, { useState, useEffect } from 'react';
import { sha256 } from 'js-sha256';
import "./style.css";
import API from "../../utils/API";

const ResetPasswordRequest = () => {

    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return [value, handleChange];
    } //This dynamicaly sets react hooks as respective form inputs are updated...


    var [email, setEmail] = useInput("");
    var [submissionMessage, setSubmissionMessage] = useState("");

    const goBack = () => {
        window.history.back();
    }

    const requestPasswordResetCode = () => {

        if (email !== "") {
            API.checkExistingAccountEmails(email)
                .then(res => {
                    console.log(res.data);
                    if (res.data !== "") {
                        API.setEmailResetCode(email)
                            .then(
                                res =>
                                    console.log(res), window.location.href = "/reset-password"
                            );
                    } else {
                        setSubmissionMessage(submissionMessage => ("Sorry... no account exists for this email address"));
                    }
                }
                );
        } else {
            setSubmissionMessage(submissionMessage => "Please enter an email address")
        }
    }

    return (
        <div>
            <div className="container">
                <div className="col-md-12 mt-2">
                    <button className="btn btn-sm" onClick={goBack}><strong>&lt; Back</strong></button>
                    <h3 className="text-center mb-5"><strong>Communication Portal</strong></h3>
                    <form className="p-3">
                        <h6 className="text-center"><strong>Enter Your Email Below to Receive Password Reset Code</strong></h6>
                        <div className="form-group">
                            <label htmlFor="resetEmailAddress">Email address</label>
                            <input type="email" className="form-control" id="resetEmailAddress" name="resetEmailAddress" onChange={setEmail} aria-describedby="emailHelp" />
                        </div>
                        <button type="button" className="btn btn-sm" onClick={requestPasswordResetCode}>Submit</button>
                        <div className="form-group text-center">
                            <p className="submission-message" name="submissionMessage">{submissionMessage}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordRequest;
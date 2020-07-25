import React, { useState, useEffect } from 'react';
import { sha256 } from 'js-sha256';
import "./style.css";
import API from "../../utils/API";

const CreateAccount = () => {

    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        console.log(value);
        return [value, handleChange];
    } //This dynamicaly sets react hooks as respective form inputs are updated...


    var [firstname, setFirstname] = useInput("");
    var [lastname, setLastname] = useInput("");
    var [phone, setPhone] = useInput("");
    var [email, setEmail] = useInput("");
    var [password, setPassword] = useInput("");
    var [confirmPassword, setConfirmPassword] = useInput("");
    var [submissionMessage, setSubmissionMessage] = useState("");

    const goBack = () => {
        window.history.back();
    }

    const createNewAccount = () => {

        let currentAccountInfo = {
            email: email,
            phone: phone,
            firstname: firstname,
            lastname: lastname,
            password: sha256(password),
            sessionAccessToken: null,
            passwordResetToken: null
        }

        if (firstname !== "" && lastname !== "" && email !== "" && password !=="" && confirmPassword !== "") {
            console.log(currentAccountInfo);
            setSubmissionMessage(submissionMessage => "");
            API.createAccount(currentAccountInfo).then(res => console.log(res));
        } else {
            setSubmissionMessage(submissionMessage => ("Not enough info entered..."));
        }

        //window.location.href = "/login"
    }


    return (
        <div>
            <div className="container">
                <div className="col-md-12 mt-2">
                    <button className="btn btn-sm" onClick={goBack}><strong>&lt; Back</strong></button>
                    <h3 className="text-center mb-5"><strong>Communication Portal</strong></h3>
                    <form className="p-3">
                        <h6 className="text-center"><strong>Create Account</strong></h6>
                        <div className="row mb-3">
                            <div className="col">
                                <label for="createAccountFirstName">First Name</label>
                                <input type="text" className="form-control" id="createAccountFirstName" name="createAccountFirstName" onChange={setFirstname} aria-describedby="createAccountFirstnameHelp" />
                            </div>
                            <div className="col">
                                <label for="createAccountFirstName">Last Name</label>
                                <input type="text" className="form-control" id="createAccountLastName" name="createAccountLastName" onChange={setLastname} aria-describedby="createAccountLastnameHelp" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="createAccountEmail">Email address</label>
                            <input type="email" className="form-control" id="createAccountEmail" name="createAccountEmail" onChange={setEmail} aria-describedby="createAccountEmailHelp" />
                        </div>
                        <div className="form-group">
                            <label for="createAccountPhone">Phone Number</label>
                            <input type="text" className="form-control" id="createAccountPhone" name="createAccountPhone" onChange={setPhone} aria-describedby="createAccountPhoneHelp" />
                        </div>
                        <div className="form-group">
                            <label for="createAccountPassword">Password</label>
                            <input type="password" className="form-control" id="createAccountPassword" onChange={setPassword} name="createAccountPassword" />
                        </div>
                        <div className="form-group">
                            <label for="createAccountPasswordConfirm">Confirm Password</label>
                            <input type="password" className="form-control" id="createAccountPasswordConfirm" name="createAccountPasswordConfirm" onChange={setConfirmPassword} />
                        </div>
                        <button type="button" className="btn btn-sm" onClick={createNewAccount}>Submit</button>
                        <div className="form-group text-center">
                            <p className="submission-message" name="submissionMessage">{submissionMessage}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;
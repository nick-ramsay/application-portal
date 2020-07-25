import React, { Component } from "react";
import "./style.css";

class CreateAccount extends Component {

    goBack = () => {
        window.history.back();
    }

    createNewAccount = () => {
        window.location.href="/login"
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 mt-2">
                        <button className="btn btn-sm" onClick={this.goBack}><strong>&lt; Back</strong></button>
                        <h3 className="text-center mb-5"><strong>Communication Portal</strong></h3>
                        <form className="p-3">
                            <h6 className="text-center"><strong>Create Account</strong></h6>
                            <div className="row mb-3">
                                <div className="col">
                                    <label for="createAccountFirstName">First Name</label>
                                    <input type="text" className="form-control" id="createAccountFirstName" name="createAccountFirstName" aria-describedby="createAccountFirstnameHelp" />
                                </div>
                                <div className="col">
                                    <label for="createAccountFirstName">Last Name</label>
                                    <input type="text" className="form-control" id="createAccountLastName" name="createAccountLastName" aria-describedby="createAccountLastnameHelp" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="createAccountEmail">Email address</label>
                                <input type="email" className="form-control" id="createAccountEmail" name="createAccountEmail" aria-describedby="createAccountEmailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="createAccountPassword">Password</label>
                                <input type="password" className="form-control" id="createAccountPassword" name="createAccountPassword" />
                            </div>
                            <div className="form-group">
                                <label for="createAccountPasswordConfirm">Confirm Password</label>
                                <input type="password" className="form-control" id="createAccountPasswordConfirm" name="createAccountPasswordConfirm" />
                            </div>
                            <button type="button" className="btn btn-sm" onClick={this.createNewAccount}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAccount;
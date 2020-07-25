import React, { Component } from "react";
import "./style.css";

class ResetPassword extends Component {

    goBack = () => {
        window.history.back();
    }

    ResetPassword = () => {
        window.location.href = "/login";
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 mt-2">
                        <button className="btn btn-sm" onClick={this.goBack}><strong>&lt; Back</strong></button>
                        <h3 className="text-center mb-5"><strong>Communication Portal</strong></h3>
                        <form className="p-3">
                            <h6 className="text-center"><strong>Reset Your Password</strong></h6>
                            <p className="text-center">Check your e-mail for your one-time reset code. Enter your reset code, email, and new password below.</p>
                            <div className="form-group">
                                <label for="passwordResetCode">Reset Code</label>
                                <input type="password" className="form-control" id="passwordResetCode" aria-describedby="passwordResetCodeHelp" />
                            </div>
                            <div className="form-group">
                                <label for="passwordResetEmail">Email address</label>
                                <input type="email" className="form-control" id="passwordResetEmail" aria-describedby="passwordResetEmailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="passwordResetNewPassword">New Password</label>
                                <input type="password" className="form-control" id="passwordResetNewPassword" />
                            </div>
                            <div className="form-group">
                                <label for="passwordResetNewPasswordConfirmation">Confirm New Password</label>
                                <input type="password" className="form-control" id="passwordResetNewPasswordConfirmation" />
                            </div>
                            <button type="button" className="btn btn-sm" onClick={this.ResetPassword}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPassword;
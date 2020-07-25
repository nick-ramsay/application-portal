import React, { Component } from "react";
import "./style.css";

class ResetPasswordRequest extends Component {

    goBack = () => {
        window.history.back();
      }

    requestPasswordResetCode = () => {
        window.location.href = "/reset-password";
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 mt-2">
                    <button className="btn btn-sm" onClick={this.goBack}><strong>&lt; Back</strong></button>
                        <h3 className="text-center mb-5"><strong>Communication Portal</strong></h3>
                        <form className="p-3">
                            <h6 className="text-center"><strong>Enter Your Email Below to Receive Password Reset Code</strong></h6>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button type="button" className="btn btn-sm" onClick={this.requestPasswordResetCode}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPasswordRequest;
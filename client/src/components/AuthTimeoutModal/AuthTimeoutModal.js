import React from "react";
import "./style.css";

function AuthTimeoutModal(props) {

    return (
        <div>
            <button type="button" id="open-auth-timeout-modal-btn" className="btn btn-sm mb-2 invisible" data-toggle="modal" data-target="#auth-timeout-modal">
                Test Auth Timeout Modal
            </button>
            <div className="modal fade" id="auth-timeout-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
            </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-sm">Extend Session</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthTimeoutModal;
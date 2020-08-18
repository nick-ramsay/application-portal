import React from "react";
import { logout } from "../../SharedFunctions/SharedFunctions";
import "./style.css";


function NavbarLoggedOut(props) {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a class="navbar-brand" href="#">Communication Portal</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <button className=" nav-item btn btn-red btn-sm mb-2 mt-2" name="logout-btn" onClick={logout}>Logout</button>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavbarLoggedOut;
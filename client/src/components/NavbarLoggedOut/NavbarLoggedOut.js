import React from "react";
import { logout } from "../../SharedFunctions/SharedFunctions";
import "./style.css";


function NavbarLoggedOut(props) {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a class="navbar-brand" href="/">Communication Portal</a>
            </div>
        </nav>

    )
}

export default NavbarLoggedOut;
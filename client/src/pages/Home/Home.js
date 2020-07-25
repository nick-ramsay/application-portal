import React, { Component } from "react";
import "./style.css";

class Home extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 mt-2 text-center">
                        <h3 className="text-center mb-5"><strong>Messages</strong></h3>
                        <a href="./test-message">Send Test Message</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;
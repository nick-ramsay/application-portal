import React, { Component } from "react";
import "./style.css";
import GithubLogo from "../../images/GitHub_Logo.png";

class Home extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 mt-2">
                        <h3 className="text-center mb-5"><strong>Messages</strong></h3>
                    </div>

                    <footer className="footer mt-5">
                        <div className="container text-center">
                            <a href="https://github.com/nick-ramsay/application-portal" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} alt="Github Logo" width="60px" /></a>
                        </div>
                    </footer>

                </div>
            </div>
        )
    }

}

export default Home;
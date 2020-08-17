import React, { Component, useState, useEffect } from 'react';
import BarLoader from "react-spinners/BarLoader";
import AuthTimeoutModal from "../../components/AuthTimeoutModal/AuthTimeoutModal";
import "./style.css";
import API from "../../utils/API";

const override = "display: block; margin: 0 auto; border-color: indigo;";

const Home = () => {

    const getCookie = (cname) => {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    } //Function to get a specific cookie. Source: W3Schools

    const logout = () => {
        document.cookie = "user_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "session_access_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "auth_expiry=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.href = "/"
    }

    var [userToken, setUserToken] = useState("");
    var [sessionAccessToken, setSessionAcccessToken] = useState("");
    var [userFirstname, setFirstname] = useState("");
    var [userLastname, setLastname] = useState("");
    var [loading, setLoading] = useState(true);

    useEffect(() => {
        setUserToken(userToken => getCookie("user_token"));
        setSessionAcccessToken(sessionAccessToken => getCookie("session_access_token"));

        API.fetchAccountDetails(getCookie("user_token")).then(res => {
            setFirstname(userFirstname => res.data.firstname);
            setLastname(userLastname => res.data.lastname);
            setLoading(loading => false);
        });
    }, []) //<-- Empty array makes useEffect run only once...

    const testMessageBtn = () => {
        window.location.href = "/test-message";
    }


    return (
        <div>

            <div className="container">
                <div className="text-right">

                </div>
                <form>
                    <div className="col-md-12 mt-2">
                        <div className="text-center">
                            <div className="pt-2">
                                <BarLoader
                                    css={override}
                                    height={10}
                                    color={"#123abc"}
                                    loading={loading}
                                />
                                <h3 className="mb-3"><strong>{(userFirstname && userLastname) ? "Welcome," : ""} {userFirstname} {userLastname}</strong></h3>
                            </div>
                            
                            <div>
                                <button type="button" id="open-auth-timeout-modal-btn" className="btn btn-sm mb-2" data-toggle="modal" data-target="#auth-timeout-modal">Test Auth Timeout Modal</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-sm mb-2" onClick={testMessageBtn}>Test Message</button>
                            </div>
                            <div>
                                <button className="btn btn-red btn-sm mb-2" name="logout-btn" onClick={logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <AuthTimeoutModal />
        </div>
    )

}

export default Home;
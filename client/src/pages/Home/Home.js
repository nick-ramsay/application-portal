import React, { useState, useEffect } from 'react';
import "./style.css";
import API from "../../utils/API";

const Home = () => {

    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return [value, handleChange];
    } //This dynamicaly sets react hooks as respective form inputs are updated...

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
        window.location.href = "/"
    }

    var [userToken, setUserToken] = useState("");
    var [sessionAccessToken, setSessionAcccessToken] = useState("");
    var [userFirstname, setFirstname] = useState("");
    var [userLastname, setLastname] = useState("");

    useEffect(() => {
        setUserToken(userToken => getCookie("user_token"));
        setSessionAcccessToken(sessionAccessToken => getCookie("session_access_token"));

        API.fetchAccountDetails(getCookie("user_token")).then(res => {
            setFirstname(userFirstname => res.data.firstname);
            setLastname(userLastname => res.data.lastname);
        });
    }, []) //<-- Empty array makes useEffect run only once...


    return (
        <div>
            <div className="container">
                <div className="col-md-12 mt-2">
                    <div className="text-right">
                        <button className="btn btn-sm" name="logout-btn" onClick={logout}>Logout</button>
                    </div>
                    <div className="text-center">
                        <h3 className="mb-5"><strong>{(userFirstname && userLastname) ? "Welcome," : ""} {userFirstname} {userLastname}</strong></h3>
                        <a href="./test-message">Send Test Message</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;
import React, { useState, useEffect } from 'react';
import "./style.css";
import API from "../../utils/API";
import { set } from 'core-js/fn/dict';

const Home = () => {

    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);

        function handleChange(e) {
            setValue(e.target.value);
        }

        return [value, handleChange];
    } //This dynamicaly sets react hooks as respective form inputs are updated...

    const logout = () => {
        sessionStorage.removeItem("user_token");
        sessionStorage.removeItem("session_access_token");
        window.location.href = "/"
    }

    var [userToken, setUserToken] = useState("");
    var [sessionAccessToken, setSessionAcccessToken] = useState("");
    var [userFirstname, setFirstname] = useState("");
    var [userLastname, setLastname] = useState("");
    var [testToken, setTestToken] = useState("");

    useEffect(() => {
        setUserToken(userToken => sessionStorage.getItem("user_token"));
        setSessionAcccessToken(sessionAccessToken => sessionStorage.getItem("session_access_token"));

        API.fetchAccountDetails(sessionStorage.getItem("user_token")).then(res => {
            console.log(res);
            setFirstname(userFirstname => res.data.firstname);
            setLastname(userLastname => res.data.lastname);
        });
        setTestToken(testToken => "Not Yet Generated");
    }, []) //<-- Empty array makes useEffect run only once...

    const testBackendToken = () => {
        console.log("Clicked backend token button...");
        API.testBackendToken().then(res=>{
            console.log(res);
            setTestToken(testToken => res.data.body);
        });
    }

    return (
        <div>
            <div className="container">
                <div className="col-md-12 mt-2">
                    <div className="text-right">
                        <button className="btn btn-sm" name="logout-btn" onClick={logout}>Logout</button>
                    </div>
                    <div className="text-center">
                        <h3 className="mb-5"><strong>{(userFirstname && userLastname) ? "Welcome," : ""} {userFirstname} {userLastname}</strong></h3>
                        <div className="text-center mb-2">
                            <p>Your Backend Test Token is: {testToken}</p>
                            <button className="btn btn-sm" onClick={testBackendToken}>Generate Backend Token</button>
                        </div>
                        <a href="./test-message">Send Test Message</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;
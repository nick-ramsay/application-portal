import { useState } from 'react';

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return [value, handleChange];
} //This dynamicaly sets react hooks as respective form inputs are updated...

export const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}; //Function to get a specific cookie. Source: W3Schools

export const logout = () => {
    document.cookie = "user_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "session_access_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "auth_expiry=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = "/"
};

export const goBack = () => {
    window.history.back();
};



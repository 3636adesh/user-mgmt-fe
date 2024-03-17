import React, { useEffect, useState } from "react";


let AuthContext = React.createContext({
    isLoggedIn: false,
    onLogOut: undefined,
    onLogin: undefined
});

export function AuthContextProvider(props) {

    let [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let isLoggedInValue = localStorage.getItem('isLoggedIn');

        if (isLoggedInValue === '1') { setIsLoggedIn(true) };
    }, [])

    function loginHandler() {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    }
    function logoutHandler() {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }
    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
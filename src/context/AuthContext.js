import React, {createContext} from "react";
import {useState} from "react"
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const navigate = useNavigate();
    // const [isAuth, toggleIsAuth] = useState(false);
    // console.log("dit is een test");

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: '',
    });

    // function login() {
    //     console.log("Gebruiker is ingelogd!");
    //     toggleIsAuth( true );
    //     navigate("/profile");
    // }
    function login() {
        console.log("Gebruiker is ingelogd!");
        toggleIsAuth({
            isAuth: true,
            user:'',
        });
        navigate("/profile");
    }

    // function logout() {
    //     console.log("Gebruiker is uitgelogd!");
    //     toggleIsAuth( false );
    //     navigate("/");
    // }

    function logout() {
        console.log("Gebruiker is uitgelogd!");
        toggleIsAuth( {
            isAuth: false,
            user: '',
        } );
        navigate("/");
    }

    const data={
        isAuthenticated: isAuth.isAuth,
        user: isAuth.user,
        loginFunction: login,
        logoutFunction: logout,
    };

    return (
    <AuthContext.Provider value={data} >
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContextProvider;
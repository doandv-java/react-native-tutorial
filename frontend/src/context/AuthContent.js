import React, {createContext} from "react";
import axios from "axios";
import {BASE_URL} from "../config";

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const register = (name, email, password) => {
        axios.post(`${BASE_URL}/register`, {
            name, email, password
        }).then(res => {
            let userInfo = res.data;
            console.log(`User Info: ${userInfo}`);
            console.log(`Register success ${res}`);
        }).catch(e => {
            console.log(`Register error ${e}`);
        });
    }

    return (<AuthContext.Provider value="Test value">{children}</AuthContext.Provider>);
};
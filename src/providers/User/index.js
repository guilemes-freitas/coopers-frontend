import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
    const initialState = JSON.parse(localStorage.getItem(`@Coopers:token`)) || "";
    const [token, setToken] = useState(initialState);
    const [auth, setAuth] = useState(!!token);
    
    const createAccount = (user) => {
        api
        .post("/accounts/", user)
        .then((_) => {
            return false;
        })
        .catch((_) => {
            return true;
        });
    };

    const Login = (user) => {
        api
        .post("/login/", user)
        .then((response) => {
            const { token } = response.data;
            localStorage.setItem("@Coopers:token", JSON.stringify(token));
            setToken(token)
            setAuth(true)
            return false;
        })
        .catch((_) => {
            return true;
        });
    };

    const Logout = () => {
        setAuth(false)
        localStorage.removeItem("@Coopers:token");
        localStorage.removeItem("@Coopers:tasks");
    };
    
    return (
        <UserContext.Provider
        value={{ auth, token, setAuth, createAccount, Login, Logout }}
        >
        {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
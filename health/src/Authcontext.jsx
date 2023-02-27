import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Authcontext=React.createContext();

function Authcontextprovider({children}){
    const [isauth,SetIsauth]=useState(true);
    const navigate=useNavigate();
    const Login1 = () => {SetIsauth(true);
    alert("Login Successfull");
    navigate("/")
    };
    const Logout =() => SetIsauth(false);
    const value= {isauth,Login1,Logout}

    return (
        <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
    )
}

export default Authcontextprovider;
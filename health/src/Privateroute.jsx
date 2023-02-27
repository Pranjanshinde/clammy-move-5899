import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "./Authcontext";

function Privateroute({children}){
    const {isauth}=useContext(Authcontext);

    if(!isauth)
    {
        return(
            <Navigate to="/login" />
        )
    }

    return children;
}

export default Privateroute;


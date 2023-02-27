import {Route,Routes} from "react-router-dom";
import Homepage from "./Frontpage";
import Login from "./Login";
import Cartpage from "./Cartpage1";
import Products from "./Products";
import Singleproduct from "./Singleproduct";
import Payment from "./Paymentpage";
import Privateroute from "./Privateroute";
import ALogin from "./adminlogin";
import Admin from "./Admin";
function Allroutes(){

    return(
        <div>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cartpage" element={<Privateroute><Cartpage/></Privateroute>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/payment" element={<Privateroute><Payment/></Privateroute>}></Route>
                <Route path="/products/:id" element={<Singleproduct/>}></Route>
                <Route path="/alogin" element={<ALogin/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                </Routes>
        </div>
    )
}


export default Allroutes;
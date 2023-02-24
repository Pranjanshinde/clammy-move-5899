import {Route,Routes} from "react-router-dom";
import Homepage from "./Frontpage";
import Login from "./Login";
import Cartpage from "./Cartpage";
import Products from "./Products";
import Singleproduct from "./Singleproduct";

function Allroutes(){

    return(
        <div>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cartpage" element={<Cartpage/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/products/:id" element={<Singleproduct/>}></Route>
                </Routes>
        </div>
    )
}


export default Allroutes;
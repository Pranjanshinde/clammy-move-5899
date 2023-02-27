import React, { useState } from "react";

export const Cartcontext=React.createContext();

function Cartcontextprovider({children}){
    const [cartitem,setCartitem]=useState([]);

    function Addtocart({image,title,price,qty,id}){
        let obj={
            image:image,
            title:title,
            price:price,
            qty:qty,
            id:id
        }
        
        setCartitem([...cartitem,obj]);
        alert("product added to cart")

    }
    function Deletetocart(id){
        alert("product removed to cart");
       const Deleteitem=cartitem.filter((element,index)=>{
            return(id!==element.id)
        })
        setCartitem([...Deleteitem]);
    }
const value1={cartitem,Deletetocart,Addtocart}

    return (
        <Cartcontext.Provider value={value1}>{children}</Cartcontext.Provider>
    )
}
export default Cartcontextprovider;
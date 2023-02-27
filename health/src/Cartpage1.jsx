import { Flex, Spacer,Box,Grid,ButtonGroup,Button,Stack} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon, ArrowRightIcon,ArrowBackIcon,ArrowForwardIcon } from '@chakra-ui/icons';
import { useContext, useEffect, useState } from 'react';
import {Cartcontext} from "./Cartcontext";
import axios from 'axios';
import {Link} from "react-router-dom";

export var Totolprice=(data)=>{
    console.log(data.data);
    const data1=data.data;
    var sum=0;
    for(let i=0;i<data1.length;i++)
    {
        sum=sum+(data1[i].price*data1[i].qty)
    }
    return sum;
  }
function Cartpage(){
    const {cartitem}=useContext(Cartcontext);
    const [cart,setCart]=useState([]);
    const myitems=[...cartitem];
    console.log(myitems);

    function Getcartdata()
    {
        axios.get('http://localhost:8080/cart')
  .then(function (response) {
    // handle success
    console.log(response);
    setCart(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    }
console.log(cart);
useEffect(()=>{
    Getcartdata();
},[])

function Deletecartdata(id){
    axios.delete(`http://localhost:8080/cart/${id}`)
  .then(function (response) {
    // handle success
    console.log(response);
    alert("Item Deleted from Cart");
    Getcartdata();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

    return(
        <>
        <Flex gap="15px" width="95%" margin="auto" marginTop="25px" paddingTop="18px" justifyContent="space-evenly" >

<Box    width="67%" gap="30px" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
<h2>{cart.length} item is your cart</h2>
<div>
{
    cart?.map((item,index)=>{

        return(
           
            <Flex height="220px" width="80%" boxShadow= "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" margin="auto" borderRadius="8px" display="flex" alignItems="center" padding="5px 8px"> 
<Box width="22%"  height="90%">
<img src={item?.image} alt="" width="100%" height="100%"/>
</Box>
<Box width="78%"  height="90%">
<p>{item?.title}</p>
<Flex justifyContent="space-between"  height="35px" alignItems="center" width="300px" >
            <h3>₹ {item?.price}</h3>
            <Flex justifyContent="space-between" alignItems="center" width="150px" >
    <p>Earn 44 HK Cash</p>
    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/earn-hk-cash.svg" alt="" height="30px" />
</Flex>       
        </Flex>
        <p>MRP: <b style={{textDecoration:"line-through"}}>{item?.price*1.25}</b></p>
        <Box display="flex" height="25px" width="7%" marginLeft="25px"  justifyContent="space-evenly" >
    <Button borderRadius="50%" color="White" backgroundColor="	#20b2aa" border="2px solid #20b2aa" ><ArrowBackIcon/></Button>
    <Button borderRadius="50%" border="1px solid #20b2aa" width="30px">{item?.qty}</Button>
    <Button borderRadius="50%" color="White" backgroundColor="	#20b2aa" border="2px solid #20b2aa"><ArrowForwardIcon/></Button>
    </Box>
</Box>
<Box display="flex" justifyItems="center" alignContent="center">
<DeleteIcon width="40px" fontSize="20px" onClick={()=>{Deletecartdata(item.id)}}/>
</Box>
</Flex>

        )
    })
};
</div>

</Box >
<Box display="block"  justifyContent="space-between" width="30%"  fontSize="18px"  >
<Flex justifyContent="space-around"  height="40px" alignItems="center"  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="7px" margin="12px 10px">
<Input placeholder='Enter Pincode' width="220px" fontSize="18px" border="4px"/>
            <p style={{color:"green",fontSize:"18px"}}>Check</p>
        </Flex>  
        <Flex justifyContent="space-around"  height="40px" alignItems="center"  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="7px" margin="12px 10px">
<Flex justifyContent="space-between" alignItems="center">
    <img src="https://static1.hkrtcdn.com/hknext/static/media/cart/discount-new.svg" alt="" height="30px" />
    <p>Apply Coupon</p>
</Flex>
           <ArrowRightIcon/>
        </Flex> 
        <Link to="/payment" ><Button color="white" backgroundColor="teal" border="2px solid teal" width="95%" height="48px" margin="auto" fontSize="17px" marginLeft="10px" borderRadius="7px">
    Proceed to Pay ₹<Totolprice data={cart}/>
  </Button></Link>
  <Box display="block"  justifyContent="space-between"  fontSize="18px"  width="95%" margin="auto" padding="5px 8px" marginTop="18px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="7px" >
        <p><b>Order Summary : </b>({cart.length} Items)</p>
        <Flex justifyContent="space-between"  height="35px" alignItems="center" >
            <p>Total Price</p>
            <p>₹ <Totolprice data={cart}/></p>
        </Flex>
        <Flex justifyContent="space-between"  height="35px" alignItems="center" >
            <p>Total Discount</p>
            <p>₹ 0.00</p>
        </Flex>
        <Flex justifyContent="space-between"  height="35px" alignItems="center" >
            <p>Other Charges</p>
            <p>₹ 0.00</p>
        </Flex>
        <Flex justifyContent="space-between"  height="35px" alignItems="center" >
            <p >Delivary Charges</p>
            <p style={{color:"green",fontSize:"18px"}}>FREE</p>
        </Flex>
        <hr />
        <Flex justifyContent="space-between"  height="35px" alignItems="center" >
            <h3>Payable Amount</h3>
            <h3>₹ <Totolprice data={cart}/></h3>
        </Flex>
        
        <p style={{color:"green",fontSize:"14px"}} >You will Save ₹3,300 & Earn ₹316 HK Cash on this order</p>
    </Box>
</Box>
        </Flex >
        </>
    )
}
export default Cartpage;
import { useState,useEffect } from "react";
import axios from "axios";
import "./admin.css";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,ButtonGroup,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Select } from '@chakra-ui/react';

  const initstate={
    title: "",
      price: 1,
      image: "",
      category: "",
      desc: "",
      company: "",
      quantity: "",
      qty: 1
  }
function Admin(){
  const [state,setState]=useState(initstate);
  const[data,setData]=useState([]);


  function Admindata(){
    axios.get('http://localhost:8080/Products')
  .then(function (response) {
    // handle success
    console.log(response);
    setData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
useEffect(()=>{
  Admindata();
},[]);

function Managedelete(id)
{
  axios.delete(`http://localhost:8080/Products/${id}`)
  .then(function (response) {
    // handle success
    console.log(response);
    alert("Item Deleted");
    Admindata();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

function Manageinput(e)
{
  console.log(e.target.name,e.target.value,e.target.type)
  if(e.target.type==="number")
  {
    e.target.value=+e.target.value;
  }
  setState({...state,[e.target.name]:e.target.value});
}
console.log(state);
function Addadmin(){
  axios({
    method: 'post',
    url: 'http://localhost:8080/Products',
    data: state
  }).then(function (response) {
    // handle success
    console.log(response);
    alert("Item Added");
    Admindata();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

  console.log(data);
    return(
    <>
    <h1 style={{textAlign:"center"}}>Admin page</h1>
    <div>
        <div className="one">
        <FormControl>
                <h3 htmlFor="email" >Product Title</h3>
                <Input id="email" type="text" placeholder='Product Title' height="27px" fontSize="20px" width="85%" margin="auto" name="title" onChange={Manageinput}/>
              </FormControl>
              <FormControl>
                <h3 htmlFor="email" >Product Price</h3>
                <Input id="email" type="number" placeholder='Product Price' height="27px" fontSize="20px" width="85%" margin="auto" name="price" onChange={Manageinput} />
              </FormControl>
              <FormControl>
                <h3 htmlFor="email" >Product Image</h3>
                <Input id="email" type="text" placeholder='Product Image' height="27px" fontSize="20px" width="85%" margin="auto" name="image" onChange={Manageinput}/>
              </FormControl>
              {/* <FormControl>
                <h3 htmlFor="email" >Product Image</h3>
                <Input id="email" type="text" placeholder='Product Image' height="27px" fontSize="20px" width="85%" margin="auto" name="image"/>
              </FormControl> */}
              <FormControl>
                <h3 htmlFor="email" >Product Category</h3>
                <Input id="email" type="text" placeholder='Product Category' height="27px" fontSize="20px" width="85%" margin="auto" name="category" onChange={Manageinput}/>
              </FormControl>
              <FormControl>
                <h3 htmlFor="email" >Product Description</h3>
                <Input id="email" type="text" placeholder='Product Description' height="27px" fontSize="20px" width="85%" margin="auto" name="desc" onChange={Manageinput}/>
              </FormControl>
              <FormControl>
                <h3 htmlFor="email" >Product Company</h3>
                <Input id="email" type="text" placeholder='Product Company' height="27px" fontSize="20px" width="85%" margin="auto" name="company" onChange={Manageinput}/>
              </FormControl>
              <FormControl>
                <h3 htmlFor="email" >Product Quantity</h3>
                <Input id="email" type="text" placeholder='Product Quantity' height="27px" fontSize="20px" width="85%" margin="auto" name="quantity" onChange={Manageinput}/>
              </FormControl>
              <Button color="white" backgroundColor="teal" border="2px solid teal" width="40%" height="48px" margin="auto" fontSize="17px" marginLeft="10px" borderRadius="7px" display="block" marginTop="10px" onClick={Addadmin} >
    Add product
  </Button>
        </div>
        <div className="two">
        {
        data?.map((item,index)=>{
            return (
                <>
                <div className="card1" key={item.id}>
                    <img src={item.image} alt="prod" className="imag" width="80%" />
                    <div className="line">
                    <div className="star">
                        <p>4.5</p>
                        <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg" height="25px" alt="" ></img>
                    </div>
                    <div className="rev">{Math.floor(item.price*0.4/1)} Reviews</div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEn8kysyP7YvXBYfnegELCN3XoX7bULIoGg&usqp=CAU" alt="veg" height="25px" />
                    </div>
                    <h2 style={{margin:"left"}}>₹ {item.price}</h2>
                    <p className="desc">{item.title}</p>
                    <ButtonGroup variant='outline' spacing='6'>
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px" onClick={()=>{Managedelete(item.id)}} >Delete</Button>

                        </ButtonGroup>
                </div>
                </>
            )
        })
    }
        </div>
    </div>
    </>
    )
}
export default Admin;
import {
    Button,
    Flex,
    Heading,
   Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import {
    Box,
  Wrap,WrapItem,
    Checkbox,
    Container,
    Divider,Avatar,
    FormControl,
    FormLabel,
    HStack,
    Input,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Select } from '@chakra-ui/react';
  import { Navigate, useNavigate } from 'react-router-dom';
  import {Cartcontext} from "./Cartcontext";
  import { useContext } from 'react';
  import {Totolprice} from "./Cartpage1";
  import { FaArrowRight } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./payment.css";
import Footer from "./footer1.jsx";
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }

function Payment(){
    const [cart,setCart]=useState([]);
    // var total=Totolprice(cart);
    // console.log(total);
    const navigate =useNavigate();
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
},[]);

function Direct(){
    alert("You order is dispatched with order Number CH015687455866")
    navigate("/");
  }
    return(
        <>
        <div id='body'>
        <div id='form' >
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <h1 className='ship'> <b> Shipping Information</b></h1>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
        //   bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }} 

        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <h3 htmlFor="email" >Full Name</h3>
                <Input id="email" type="email" placeholder='Enter Full Name' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
              <FormControl>
                <h3 htmlFor="password">Address</h3>
                <Input id="Password" type="text" placeholder='Enter Order Address' height="27px" fontSize="20px" width="85%" margin="auto" />
              </FormControl>
              <FormControl>
                <h3 htmlFor="code">Zip Code</h3>
                <Input id="code" type="number" placeholder='Enter Zip Code' height="27px" fontSize="20px" width="85%" margin="auto" />
              </FormControl>
              <FormControl>
                <h3 htmlFor="city">City</h3>
                <Input id="city" type="text" placeholder='Enter City Name' height="27px" fontSize="20px" width="85%" margin="auto"  />
              </FormControl>
              <FormControl>
                <h3 htmlFor="email">E mail</h3>
                <Input id="email" type="text" placeholder='Enter Email Address' height="27px" fontSize="20px" width="85%" margin="auto" />
              </FormControl>
             
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Accpet Terms and Conditions</Checkbox>
              
            </HStack>
            <h1 className='ship'>Payment Details<b></b></h1>
          </Stack>
          <div>
            <div>
            <h1>Credit Card</h1>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Pay with Credit Card</Checkbox>
              <br />
              <Wrap>
  <WrapItem>
    <Avatar name='Dan Abrahmov' src='data:image/jpeg;base64,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' height="70px" />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://th.bing.com/th/id/OIP.Fh3VxQRxG0ZEt2mCfL0qrwHaFj?pid=ImgDet&rs=1' height="70px"/>
  </WrapItem>
  <WrapItem>
    <Avatar name='Kent Dodds' src='data:image/jpeg;base64,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TSInREJyM5ublbzfawmfn1M/fraNZK777jv8p6vlp9kttbR2PiauuLFjrbtHXVcsS9Yo+xfytdjv2qr6p4Hu4JVF4btap9qs6oqL+USdc4NkwiphUTC56ka1rURGoiInRETCfJDHJyJyVtEx5mJ/SJtvbULNyu4w40Tqiw0zV+TUVMngttWzhGe4W27U860MtS+poK2OnWWNzXoiKjuVFXPTXcutps35GtRVcjWo53vKiIir6qFa1yYciKngqZT7zP8A5MTMxavaYiP0nqa7bL9DdrgkVttszrfHC901xmj7BjZf0WRMe1FXzwpj7fvj3iPH83xZxnHuw9VNzREREREREToiJhEJytRVcjW8y9VwmV9VMYz1r1dNe0xrydR/rZrnFtsrK+hpZ6JnPV22pZWRRYRVkRuFc1E710i4zs2QFGK84rxePsxidNPj404e7BO3o6tlejeV9G2hkdIs2NsYvLj0NhtU9VU0NNPV0P1CeVHPfTK5rljTOs8qJtUwuD28jM83K3m+1hM/PqfozyXpaNUrr+dpmYABspYqQuybAAbGwKQuybAAbGwKQuybAAbGwKQuybAoGwBACgQFIAAKBAAAAKBAAAKQoEAAApCgQAAACgQAAACgQAAAUAQAAAUAQAAAUgAAAAUgAAAUhSAAABSFIBQABANDQADQ0AKTQ0AA0NACk0NAANDQApNF0BANDQApNF0BANDQApNDQADQ0AKTQ0AA0NAANDQADQ0AA0NAANDQFINDQADQ0BSDQ0AA0NAUhdE0AA0NAUhdE0BQNACAAAAAABQIAAABQIAABSFAgAAFIUCAAAAUCAAAAUCAAAAAAAAAAAAAAKQAAAAKQAAAKQpAAAApCkAoAA//2Q==' height="70px" />
  </WrapItem>

</Wrap>
            </HStack>
            </div>
            <div>
            <FormControl>
                <h3 htmlFor="number" >Credit Card Number</h3>
                <Input id="number" type="number" placeholder='Enter Credit Card Number' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
              <FormControl>
                <h3 htmlFor="cvv" >Credit Card CVV</h3>
                <Input id="cvv" type="number" placeholder='Enter CVV' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
              <FormControl>
                <h3 htmlFor="date" >Enter Expiry Date</h3>
                <Input id="date" type="date" placeholder='Enter Date' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
            </div>
          </div>
        </Box>
      </Stack>
    </Container>
        </div>
        <div id='amount'>
        <Box display="block"  justifyContent="space-between"  fontSize="18px"  width="95%" margin="auto" padding="5px 8px" marginTop="350px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="7px" >
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
        <Button color="white" backgroundColor="teal" border="2px solid teal" width="95%" height="48px" margin="auto" fontSize="17px" marginLeft="10px" borderRadius="7px" onClick={Direct}>
    Proceed to Pay ₹<Totolprice data={cart}/>
  </Button>
        <p style={{color:"green",fontSize:"14px"}} >You will Save ₹3,300 & Earn ₹316 HK Cash on this order</p>
    </Box>
        </div>
        
        
      </div>
      <Footer/>
        </>
    )
}

export default Payment;
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import { cartData } from './_data'
  import Footer from "./footer1.jsx";
  // import {Link} from "react-router-dom";
  import { Input } from '@chakra-ui/react';
  import { Select } from '@chakra-ui/react';
  import { Cartcontext } from "./Cartcontext";
import { useContext,useEffect } from "react";


export var Totolprice=(arr)=>{
  var sum=0;
  for(let i=0;i<arr.length;i++)
  {
      sum=sum+(arr[i].price*arr[i].quantity)
  }
  return sum;
}

const Cartpage = () => {
  const {cartitem}=useContext(Cartcontext);

  const cartData=[
    
      ...cartitem
]

var Total=Totolprice(cartData);
console.log(Total);

return (
  <>
 <Box
    maxW={{
      base: '3xl',
      lg: '7xl',
    }}
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column',
        lg: 'row',
      }}
      align={{
        lg: 'flex-start',
      }}
      spacing={{
        base: '8',
        md: '16',
      }}
    >
      <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart (3 items)
        </Heading>

        <Stack spacing="6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
    <Footer/>
    
    </>
    )
}
  export default Cartpage;
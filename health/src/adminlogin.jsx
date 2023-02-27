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
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Select } from '@chakra-ui/react';
  import {Link,Route,Routes} from "react-router-dom";
import "./Login.css";
import {Authcontext} from "./Authcontext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function ALogin(){
const navigate=useNavigate();

function Admin1(){
  navigate("/admin");
}

function Addaccount(){
    alert("Account Created Suceessfully");
}
    return(
        <>
        <h1 style={{textAlign:"center"}}>Admin Login</h1>
        <div id='split'>
          
        <div id='one'>
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
         
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            {/* <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Log in to your account
            </Heading> */}
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
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
              <FormControl>
                <h3 htmlFor="email" >E mail</h3>
                <Input id="email" type="email" placeholder='Email Address' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
              </FormControl>
              <FormControl>
                <h3 htmlFor="email" >Password</h3>
                <Input id="email" type="password" placeholder='Email Password' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
             
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked display="block">Remember me</Checkbox>
            
              
            </HStack>
            <Button color="white" backgroundColor="teal" border="2px solid teal" width="95%" height="48px" margin="auto" fontSize="17px" marginLeft="10px" borderRadius="7px" display="block" onClick={Admin1}  >
    Login
  </Button>
            <Box spacing="6" display="flex" justifyContent="space-between" alignContent="center" >
             {/* <Link to="/products" > <Button variant="primary" style={{backgroundColor:"black",color:"white"}}>Sign in</Button></Link> */}
              <Box >
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted" display="block" marginLeft="30px">
                  -------------or continue with------------
                </Text>
                <Divider />
              </Box>
              
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
    </div>
    <div id='two'>
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
         
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            {/* <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Become a coach insider
            </Heading> */}
            <HStack spacing="1" justify="center">
              <Text color="muted">Sign up to receive Coach emails (you can withdraw your consent at any time). Read our Privacy Policy and Contact Us for more details.</Text>
              
            </HStack>
          </Stack>
        </Stack>
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
                <h3 htmlFor="email" >First Name</h3>
                <Input id="email" type="text" placeholder='First Name' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
           
              <FormControl>
                <h3 htmlFor="email" >Last Name</h3>
                <Input id="email" type="text" placeholder='Last Name' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
              <FormControl>
                <h3 htmlFor="email" >E mail</h3>
                <Input id="email" type="email" placeholder='Email' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
              <FormControl>
                <h3 htmlFor="email" >Password</h3>
                <Input id="email" type="password" placeholder='Password' height="27px" fontSize="20px" width="85%" margin="auto"/>
              </FormControl>
             
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked disabled>Must be 8 or more characters</Checkbox>
               <Checkbox defaultChecked disabled>Must include at least one number and letter</Checkbox>
             
             
            </HStack>
            <Stack spacing="6">
            <Button color="white" backgroundColor="teal" border="2px solid teal" width="95%" height="48px" margin="auto" fontSize="17px" marginLeft="10px" borderRadius="7px" display="block" onClick={Addaccount} >
    Create Account
  </Button>
              <HStack>
                <Divider />
               
                <Divider />
              </HStack>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    </div>
    
    </div>
        </>
    )
}

export default ALogin;
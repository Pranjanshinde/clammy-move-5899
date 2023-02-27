import { Flex, Spacer,Box,Grid,ButtonGroup,Button,Stack} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./products.css";
import { Radio, RadioGroup } from '@chakra-ui/react';
import { ArrowBackIcon, AddIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Footer from "./footer1.jsx";
import { useContext } from 'react';
import {Cartcontext} from "./Cartcontext";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react';
function Products(){
    // const {cartitem,Deletetocart,Addtocart}=useContext(Cartcontext);
const [prod,setProd]=useState([]);
const [page,setPage]=useState(1);
const [sort,setSort]=useState("");
const [search,setSearch]=useState("");

function Getdata(){
    if(sort=="" && search=="")
    {
        var url=`http://localhost:8080/Products?_limit=9&_page=${page}`;
    }else
    if(sort!="" && search=="")
    {
        url=`http://localhost:8080/Products?_limit=9&_page=${page}&_sort=price&_order=${sort}`;
    }else
    if(sort=="" && search!="")
    {
        url=`http://localhost:8080/Products?_limit=9&_page=${page}&category=${search}`;
    }
    else
    if(sort!="" && search!="")
    {
        url=`http://localhost:8080/Products?_limit=9&_page=${page}&_sort=price&_order=${sort}&category=${search}`;
    }
    axios.get(url)
      .then(function (response) {
        console.log(response);
        setProd(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
}

useEffect(()=>{
    Getdata();
},[page,sort,search]);

function Managepage(val){
    setPage(page+val);
}
function Managesort(e){
    setPage(1);
    setSort(e.target.value);
}
function ManageSearch(e){
    console.log(e);
    setSearch(e);
    setPage(1);
}

function Postdata(title,image,qty,price,category)
{
    const obj={
        title:title,
        image:image,
        qty:qty,
        price:price,
        category:category
    }
    axios({
        method: 'post',
        url: 'http://localhost:8080/cart',
        data: obj
      }).then((data)=>{console.log(data);
        alert("Item added to cart")
    }).catch((err)=>console.log(err));
}

console.log(prod);
    return(
        <>
        <Select placeholder='Sort By : Price' marginLeft="1200px" fontSize="16px" value={null} onChange={Managesort}>
  <option value='asc' >Low to high</option>
  <option value='desc'>High to low</option>
  <option value=''>Clear</option>
</Select>
        <Flex gap="15px" width="95%" margin="auto" marginTop="25px" paddingTop="18px" justifyContent="space-evenly">
        <Box display="block"  justifyContent="space-between" width="18%">
      <h2>Browse By : </h2>
      <Box width="95%" boxShadow= "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" margin="auto" padding="15px 4px" marginTop="15px">
      <Flex justifyContent="space-around"  height="35px" alignItems="center" value="Whey Protein Isolate" onClick={()=>{ManageSearch("")}}>
        <h3>Categories</h3>
        <p style={{color:"teal"}}>clear</p>
        </Flex>
        <Flex justifyContent="space-around"  height="35px" alignItems="center" value="Whey Protein Isolate" onClick={()=>{ManageSearch("Whey Protein Isolate")}}>
            <p>Whey Protien</p>
            <p>151</p>
        </Flex>
        <Flex justifyContent="space-around"  height="35px" alignItems="center" value="Energy Bars" onClick={()=>{ManageSearch("Energy Bars")}}>
            <p>Energy Bars</p>
            <p>89</p>
        </Flex>
        <Flex justifyContent="space-around"  height="35px" alignItems="center" value="Fish Oil" onClick={()=>{ManageSearch("Fish Oil")}}>
            <p>Fish Oil</p>
            <p>62</p>
        </Flex>
        <Flex justifyContent="space-around"  height="35px" alignItems="center" value="Multivitamin" onClick={()=>{ManageSearch("Multivitamin")}}>
            <p>Multivitamin</p>
            <p>48</p>
        </Flex>
        <Flex justifyContent="space-around"  height="35px" alignItems="center" value="fitness equipments" onClick={()=>{ManageSearch("fitness equipments")}}>
            <p>Equipments</p>
            <p>76</p>
        </Flex>
      </Box>
      <Box width="95%" boxShadow= "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" margin="auto" padding="0px 4px" >
        <h3>Discount</h3>
        <div className='discount'>
    <input type="radio" id="html" name="fav_language" value="HTML" ></input>
  <label for="html">20% And Above</label></div>
<div className='discount'>
    <input type="radio" id="html" name="fav_language" value="HTML" ></input>
  <label for="html">40% And Above</label></div>
<div className='discount'>
    <input type="radio" id="html" name="fav_language" value="HTML" ></input>
  <label for="html">60% And Above</label></div>     
<h3>Ratings</h3>
        <div className='discount'>
    <input type="radio" id="html" name="fav_language" value="HTML" ></input>
  <label for="html">4 Ratings & Above</label></div>
<div className='discount'>
    <input type="radio" id="html" name="fav_language" value="HTML" ></input>
  <label for="html">3 Ratings & Above</label></div>
<div className='discount'>
    <input type="radio" id="html" name="fav_language" value="HTML" ></input>
  <label for="html">2 Ratings & Above</label></div> 
<div className='discount'>
    <input type="radio" id="html" name="fav_language" value="HTML" ></input>
  <label for="html">1 Ratings & Above</label></div>   
      </Box>
</Box>
<Grid    width="70%" templateColumns='repeat(3, 1fr)' gap="30px">
    {
        prod?.map((item,index)=>{
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
                    <Button color='orange' border="1px solid orange" width="140px" margin="auto" backgroundColor="white" padding="6px 12px" borderRadius="4px" onClick={()=>{Postdata(item.title,item.image,item.qty,item.price,item.category)}}>Add To Cart</Button>

                        </ButtonGroup>
                </div>
                </>
            )
        })
    }
    
</Grid >

        </Flex >
        <Box display="flex" height="35px" width="7%" margin="auto"  justifyContent="space-evenly" marginTop="20px" marginBottom="20px">
    <Button borderRadius="50%" color="White" backgroundColor="	#20b2aa" border="2px solid #20b2aa" isDisabled={page==1} onClick={()=>{Managepage(-1)}}><ArrowBackIcon/></Button>
    <Button borderRadius="50%" border="1px solid #20b2aa" width="30px">{page}</Button>
    <Button borderRadius="50%" color="White" backgroundColor="	#20b2aa" border="2px solid #20b2aa" isDisabled={page==7} onClick={()=>{Managepage(1)}}><ArrowForwardIcon/></Button>
    </Box>
    <Footer/>
        </>
    )
}


export default Products;
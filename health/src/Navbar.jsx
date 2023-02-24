// import {Link,Route,Routes} from "react-router-dom";
import { Input,Stack } from '@chakra-ui/react';
import { Button, ButtonGroup ,Image,Wrap } from '@chakra-ui/react';
import Allroutes from './Allroutes';
import { Link } from 'react-router-dom';
import "./Navbar.css"


function Navbar(){

    return(
        <>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}>
        <div style={{display:"flex",justifyContent:"space-between",textAlign:"center",width:"80%",margin:"auto",alignItems:"center",height:"75px"}}>
        <Link to="/">
        <img src="data:image/png;base64,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" alt="logo" height
        ="50px" /></Link>
        <Stack spacing={3}>
  <Input variant='filled' placeholder='Search for Products and Brands...' width='400px' height="25px" borderRadius="6px"  />
</Stack>
<ButtonGroup gap='20'>


<Stack direction='row' spacing={4} align='center'><Link to="/login">
<Button colorScheme='teal' size='md' backgroundColor="teal" color="white" border="none" fontSize="15px" padding="5px 20px" borderRadius="7px">
    Login
  </Button></Link></Stack>
  <Link to="/cartpage"><Image
  borderRadius='full'
  boxSize='22px'
  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfjyMEbNRfdshP7V6tyruxlCvduRLPn8x8A&usqp=CAU'
  alt='Dan Abramov'
/></Link></ButtonGroup>
</div></div>
<div style={{display:"flex",height:"50px",fontSize:"12px",width:"80%",margin:"auto",justifyContent:"space-between",alignItems:"center"}}>
    <div className='lower1'>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H12" stroke="#00B5B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 6H19" stroke="#00B5B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 18H16" stroke="#00B5B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    <p>Shop By Category</p>
    </div>
    <div className='lower'>
<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5567 19.5C9.35571 19.5 8.14618 19.0402 7.23477 18.1291L3.3762 14.272C2.43924 13.3354 1.94521 12.0412 2.00483 10.7214L2.20926 6.45561C2.30296 4.42062 3.91282 2.81136 5.9571 2.70918L10.216 2.50483C11.5448 2.44523 12.831 2.93908 13.7679 3.87568L17.6265 7.7328C19.4578 9.56345 19.4578 12.5521 17.6265 14.3827L13.8872 18.1206C12.9673 19.0402 11.7662 19.5 10.5567 19.5Z" fill="#33C4C5"></path><path d="M7.5 10.5C6.12308 10.5 5 9.37692 5 8C5 6.62308 6.12308 5.5 7.5 5.5C8.87692 5.5 10 6.62308 10 8C10 9.37692 8.87692 10.5 7.5 10.5ZM7.5 6.65385C6.76154 6.65385 6.15385 7.26154 6.15385 8C6.15385 8.73846 6.76154 9.34615 7.5 9.34615C8.23846 9.34615 8.84615 8.73846 8.84615 8C8.84615 7.26154 8.23846 6.65385 7.5 6.65385Z" fill="white"></path><path d="M10.6802 15.5C10.5073 15.5 10.3344 15.4363 10.1979 15.2999C9.93403 15.0362 9.93403 14.5996 10.1979 14.3358L13.8376 10.6978C14.1015 10.4341 14.5382 10.4341 14.8021 10.6978C15.066 10.9616 15.066 11.3981 14.8021 11.6619L11.1624 15.2999C11.0259 15.4363 10.853 15.5 10.6802 15.5Z" fill="white"></path></svg><p>Best Sellers</p></div>
<div className='lower'>
<svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.36341C12.9964 4.67688 12.3101 3.06049 11.0916 1.86783C9.87316 0.675247 8.22173 0.00371928 6.49847 0C0.435452 0 -2.28802 7.47812 2.30352 11.231V17.3105C2.30462 17.4853 2.37331 17.6533 2.4957 17.7805C2.61823 17.9078 2.78531 17.9851 2.96342 17.9967C3.1417 18.0085 3.31793 17.9537 3.45657 17.8437L6.49859 15.3924L9.5335 17.8435C9.63709 17.9264 9.76247 17.9789 9.89512 17.9949C10.0279 18.0108 10.1625 17.9896 10.2834 17.9336C10.4052 17.8785 10.5083 17.7907 10.5809 17.6803C10.6536 17.57 10.6927 17.4417 10.6937 17.3105V11.231C12.1564 10.0193 13 8.23907 13 6.36341ZM9.27195 15.8424L7.39722 14.3261C7.14345 14.1207 6.82447 14.0081 6.49524 14.0081C6.16584 14.0081 5.84686 14.1207 5.59327 14.3261L3.71853 15.8424V12.1173C5.4772 12.9272 7.51316 12.9272 9.27219 12.1173L9.27195 15.8424ZM3.56265 6.14856C3.4229 6.0161 3.37253 5.81734 3.43269 5.63637C3.49286 5.45538 3.65313 5.3237 3.84564 5.29696L5.08367 5.13081C5.25153 5.10577 5.39665 5.00253 5.47277 4.85385L6.02449 3.74597C6.11277 3.57689 6.29042 3.47055 6.48433 3.47055C6.67841 3.47055 6.8559 3.57689 6.94417 3.74597L7.50302 4.85385C7.57581 5.00222 7.71888 5.10593 7.88516 5.13081L9.13031 5.30392C9.32281 5.33066 9.48309 5.46234 9.54326 5.64333C9.60342 5.82431 9.55289 6.02308 9.4133 6.15552L8.51476 7.02104C8.39332 7.13557 8.33774 7.30156 8.36616 7.46415L8.5784 8.67588C8.60398 8.85455 8.52881 9.03276 8.38211 9.14186C8.23541 9.25098 8.03992 9.27401 7.87093 9.20214L6.75324 8.62751C6.60481 8.55116 6.42763 8.55116 6.27917 8.62751L5.16149 9.20214C4.98778 9.31991 4.75802 9.32038 4.58369 9.20368C4.40951 9.08684 4.32692 8.87695 4.37619 8.67586L4.58842 7.46413C4.62001 7.30262 4.56695 7.13631 4.44694 7.02102L3.56265 6.14856Z" fill="#77777E"></path></svg><p>Brands</p></div>
<div className='lower'>
<img  src="https://static1.hkrtcdn.com/hknext/static/media/pdp/deal-icon.svg"/><p>Blogs</p></div>
<div className='lower'>
<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 3.75025H6.25V7.50025H1.25C0.918479 7.50025 0.600537 7.36855 0.366116 7.13413C0.131696 6.89971 0 6.58177 0 6.25025V5.00025C0 4.66873 0.131696 4.35079 0.366116 4.11636C0.600537 3.88194 0.918479 3.75025 1.25 3.75025H2.835C2.52491 3.2133 2.42543 2.58028 2.55586 1.97411C2.6863 1.36793 3.03734 0.831852 3.54083 0.469968C4.04432 0.108084 4.66433 -0.0537836 5.28047 0.015797C5.8966 0.0853777 6.4649 0.381441 6.875 0.846498C7.2851 0.381441 7.8534 0.0853777 8.46953 0.015797C9.08567 -0.0537836 9.70567 0.108084 10.2092 0.469968C10.7127 0.831852 11.0637 1.36793 11.1941 1.97411C11.3246 2.58028 11.2251 3.2133 10.915 3.75025H12.5C12.8315 3.75025 13.1495 3.88194 13.3839 4.11636C13.6183 4.35079 13.75 4.66873 13.75 5.00025V6.25025C13.75 6.58177 13.6183 6.89971 13.3839 7.13413C13.1495 7.36855 12.8315 7.50025 12.5 7.50025H7.5V3.75025ZM3.75 2.50025C3.75 2.83177 3.8817 3.14971 4.11612 3.38413C4.35054 3.61855 4.66848 3.75025 5 3.75025H6.25V2.50025C6.25 2.16873 6.1183 1.85078 5.88388 1.61636C5.64946 1.38194 5.33152 1.25025 5 1.25025C4.66848 1.25025 4.35054 1.38194 4.11612 1.61636C3.8817 1.85078 3.75 2.16873 3.75 2.50025ZM7.5 3.75025H8.75C8.99723 3.75025 9.2389 3.67694 9.44446 3.53958C9.65002 3.40223 9.81024 3.20701 9.90485 2.9786C9.99946 2.75019 10.0242 2.49886 9.97598 2.25639C9.92775 2.01391 9.8087 1.79118 9.63388 1.61636C9.45907 1.44155 9.23634 1.3225 8.99386 1.27427C8.75139 1.22603 8.50005 1.25079 8.27165 1.3454C8.04324 1.44001 7.84801 1.60022 7.71066 1.80579C7.57331 2.01135 7.5 2.25302 7.5 2.50025V3.75025ZM12.5 8.75025H7.5V15.0002H10C10.663 15.0002 11.2989 14.7369 11.7678 14.268C12.2366 13.7992 12.5 13.1633 12.5 12.5002V8.75025ZM6.25 15.0002V8.75025H1.25V12.5002C1.25 13.1633 1.51339 13.7992 1.98223 14.268C2.45107 14.7369 3.08696 15.0002 3.75 15.0002H6.25Z" fill="#77777E"></path></svg><p>Gift Card</p></div>
<div className='lower'>
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.37202 0.000997242C3.81186 -0.0686701 0.0899012 3.52044 0.00157589 8.08028C-0.0113566 8.74969 0.055548 9.4014 0.193441 10.0264C0.426867 11.0847 0.565641 12.1617 0.565641 13.2455V15.3404C0.565641 15.6614 0.825812 15.9216 1.1468 15.9216H3.2417C4.32547 15.9216 5.40247 16.0604 6.46081 16.2938C7.08582 16.4316 7.73749 16.4986 8.40689 16.4856C12.9667 16.3973 16.5558 12.6755 16.4863 8.1154C16.4183 3.66442 12.823 0.0689429 8.37202 0.000997242Z" fill="#77777E"></path><path d="M4.36379 9.95293C5.06898 9.95293 5.64066 9.38125 5.64066 8.67605C5.64066 7.97085 5.06898 7.39917 4.36379 7.39917C3.65859 7.39917 3.08691 7.97085 3.08691 8.67605C3.08691 9.38125 3.65859 9.95293 4.36379 9.95293Z" fill="#EFFBFC"></path><path d="M7.97512 9.95293C8.68031 9.95293 9.25199 9.38125 9.25199 8.67605C9.25199 7.97085 8.68031 7.39917 7.97512 7.39917C7.26992 7.39917 6.69824 7.97085 6.69824 8.67605C6.69824 9.38125 7.26992 9.95293 7.97512 9.95293Z" fill="#EFFBFC"></path><path d="M11.586 9.95293C12.2912 9.95293 12.8628 9.38125 12.8628 8.67605C12.8628 7.97085 12.2912 7.39917 11.586 7.39917C10.8808 7.39917 10.3091 7.97085 10.3091 8.67605C10.3091 9.38125 10.8808 9.95293 11.586 9.95293Z" fill="#EFFBFC"></path></svg><p> Support</p></div>
<div className='lower'>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 8.33325C17.5 14.1666 10 19.1666 10 19.1666C10 19.1666 2.5 14.1666 2.5 8.33325C2.5 6.34413 3.29018 4.43647 4.6967 3.02995C6.10322 1.62343 8.01088 0.833252 10 0.833252C11.9891 0.833252 13.8968 1.62343 15.3033 3.02995C16.7098 4.43647 17.5 6.34413 17.5 8.33325Z" fill="#77777E"></path><path d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><p>Store locator</p></div>
</div>
        <Allroutes/>
        
        </>
    )
}


export default Navbar;
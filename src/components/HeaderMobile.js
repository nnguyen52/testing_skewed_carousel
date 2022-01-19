import React from 'react';
import logo from '../assets/logo.png'; 
import {useState} from 'react'; 
import { motion  , MotionConfig  ,  AnimatePresence  } from 'framer-motion'; 


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false ); 
  return <div className='header_mobile'>
    <img src={logo} className='logo' />  
    <div className='hamburger' style={{ zIndex : 9999}}> 
    <h2 onClick={e => setOpenMenu(prev=>!prev)}> {!openMenu ?'OPEN' : 'CLOSE'} </h2> </div>
 <AnimatePresence> 
     {openMenu && 
    <MotionConfig transition={{duration : .6 }}> 
    <motion.div
    initial={{
      x : '100vw' , 
      opacity : 0 , 
      
    }}
    animate={{ 
      x : 0  , 
      opacity : 1
    }}
    exit ={{
      x : '100vw' , 
      opacity : 0 , 
    }}
    className='menu' 
    style={{display : openMenu ? 'block' : 'none'}}
    >
    <ul> 
      <li > TOP</li> 
      <li >COMPANY</li> 
      <li > PRODUCTS</li> 
      <li >PRESS RELEASE</li> 
      <li > RECRUIT</li> 
      <li > SUPPORT </li> 

      </ul> 
     </motion.div> 
     </MotionConfig>  } 
     </AnimatePresence> 
  </div>;
};

export default Header;
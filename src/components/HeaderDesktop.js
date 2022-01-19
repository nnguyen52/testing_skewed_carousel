import { motion } from 'framer-motion';
import React from 'react';
import FromSoftwareLogo from '../FromSoftwareLogo';
const HeaderDesktop = () => {
  return <motion.div className='header_desktop'>
      <FromSoftwareLogo />
      <ul className='menu'>
      <li > TOP</li> 
      <li >COMPANY</li> 
      <li > PRODUCTS</li> 
      <li >PRESS RELEASE</li> 
      <li > RECRUIT</li> 
      <li > SUPPORT </li>  
    </ul>
  </motion.div>;
};

export default HeaderDesktop;

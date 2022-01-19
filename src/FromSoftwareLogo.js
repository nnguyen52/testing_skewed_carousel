import { motion } from 'framer-motion';
import React from 'react';
import logo  from './assets/logo.png' ;
const FromSoftwareLogo = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 60,
        left: 100,
        zIndex: 9999,
        width: '20%',
        height: '40px',
      }}
      initial={{
        y: '100px',
        opacity: 0,
      }}
      animate={{
        y: '-2vw',
        opacity: 1,
      }}
      transition={{
        delay: 2,
        duration: 1.5,
      }}
      className = 'fromsoftwareLogo'
    >
      <img
        src={logo}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          position: 'center',
        }}
      />
    </motion.div>
  );
};

export default FromSoftwareLogo;

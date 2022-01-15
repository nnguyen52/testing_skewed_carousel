import { motion } from 'framer-motion';
import React from 'react';

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
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 1,
        duration: 1.5,
      }}
    >
      <img
        src="https://media.fromsoftware.jp/fromsoftware/jp/static/img/top/sp/logo.png"
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

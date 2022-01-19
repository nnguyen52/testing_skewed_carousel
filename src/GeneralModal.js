import { motion } from 'framer-motion';
import React from 'react';
import CloseButton from './components/CloseButton';
import demonSoulsImg from './assets/demonSouls.png';
const GeneralModal = ({ setOpenModal, chosenGame }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        backgroundImage: chosenGame ? `url(${chosenGame.background})` : null, 
 
      }}
      className="general_content_wrapper"
    >
      <div className="general_content">
        <div  onClick={() => setOpenModal((prev) => !prev)}>
          <CloseButton />
        </div>
        <motion.div className='general_content_main' style={{color : 'white' ,  }} >
          <div>
            <img src={demonSoulsImg} style={{width : '100%' , height :  '1005' , maxHeight : '300px' , border : '1px solid blue'}}/>
          <div>
            <p>
              {chosenGame.content} 
              </p> 
          </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GeneralModal;

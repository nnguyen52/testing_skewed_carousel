import { motion } from 'framer-motion';
import React from 'react';
import CloseButton from './components/CloseButton';

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
        <div onClick={() => setOpenModal((prev) => !prev)}>
          <CloseButton />
        </div>
      </div>
    </motion.div>
  );
};

export default GeneralModal;

import React from 'react';

const CloseButton = () => {
  return (
    <div className="close_button_wrapper">
      <div
        style={{
          padding: '5px',
          background: 'rgba(255,255,255 , .1)',
          width: 'fit-content',
          cursor: 'pointer',
        }}
      >
        <div className="clsoeIcon"></div>
        <span
          style={{
            fontSize: '1.2em',
            letterSpacing: '2px',
            fontWeight: '300',
            color: 'white',
          }}
        >
          CLOSE
        </span>
      </div>
    </div>
  );
};

export default CloseButton;

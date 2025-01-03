import React from 'react';
import './actiontext.css'

const ActionText = ({ className = 'action-text-one', onClick, children }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default ActionText;

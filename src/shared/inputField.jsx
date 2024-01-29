// InputField.js

import React from 'react';
import "../shared/inputField.css";


const InputField = ({ value, onChange, placeholder, className }) => {
  return (
    
      
      <input
        type="text"
        value={value || ''} 
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={className}
      />
  
  );
};

export default InputField;

// InputField.js

import React from 'react';
import "./inputField.css";


const InputField = ({ value, onChange, placeholder, className }) => {
  return (
      <input
        type="text"
        value={value || ''} 
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={"input-field-type-one " + className}
      />
  
  );
};

export default InputField;

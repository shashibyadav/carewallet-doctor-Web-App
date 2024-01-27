// InputField.js

import React from 'react';
import "../shared/inputField.css";


const InputField = ({ label, value, onChange, placeholder, className }) => {
  return (
    <div className='input-field'>
      <label>{label}</label>
      <input
        type="text"
        value={value || ''} 
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default InputField;

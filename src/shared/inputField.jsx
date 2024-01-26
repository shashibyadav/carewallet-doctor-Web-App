// InputField.js

import React from 'react';

const InputField = ({ label, value, onChange, placeholder, className }) => {
  return (
    <div>
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

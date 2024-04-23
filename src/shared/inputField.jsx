// InputField.js

import React from 'react';
import "./inputField.css";


const InputField = React.forwardRef(({ type = "text", value, onChange, placeholder, className, name, onChangeEvent, ...restProps }, ref) => {
  return (
      <input
        type={type}
        value={value || ''} 
        onChange={(e) => {
          if(onChangeEvent) {
            onChangeEvent(e);
          } else {
            onChange(e.target.value);
          }
        }}
        placeholder={placeholder}
        className={"input-field-type-one " + className}
        name={name}
        ref={ref ? ref : null}
        {...restProps}
      />
  
  );
});

export default InputField;

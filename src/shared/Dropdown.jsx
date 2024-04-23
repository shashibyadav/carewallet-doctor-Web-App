import React, { useState } from 'react';

const Dropdown = ({ name, options, onSelect, className }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event?.target?.value);
    onSelect(event);
  };

  return (
    <select name={name} value={selectedOption} onChange={(e) => handleSelect(e)} className={className}>
      <option value="">Title</option>
      {options?.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

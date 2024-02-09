import React from 'react';
import "../../shared/buttonLogOut.css";

const ButtonLogOut = ({ onClick }) => {
  return (
    <button className="button-log-out" onClick={onClick}>
      Log Out
    </button>
  );
};

export default ButtonLogOut;
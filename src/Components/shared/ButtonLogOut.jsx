import React from 'react';

const LogoutButton = ({ onClick }) => {
  return (
    <button
      style={{
        display: 'flex',
        width:'40%',
        background: 'none',
        border: 'none',
        color: '#FFFFFF', // Set the color as per your design
        cursor: 'pointer',
        marginLeft: '10rem',
        justifyContent: 'right',
        alignItems: 'right',
        fontSize: 'inherit',
      }}
      onClick={onClick}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;

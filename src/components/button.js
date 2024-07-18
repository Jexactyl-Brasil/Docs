import React from 'react';

const CustomButton = ({ onClick, children,disabled}) => {
  const buttonStyle = {
    backgroundColor: '#007BFF', /* Azul */
    border: 'none',
    color: 'white',
    padding: '8px 15px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = '#0056b3'; /* Azul forte */
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = '#007BFF';
  };

  return (
    <button
      style={buttonStyle}
      disabled={disabled}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </button>
  );
};

export default CustomButton;

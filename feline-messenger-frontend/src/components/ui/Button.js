import React from 'react';

const Button = ({ children, type = 'button' }) => {
  return (
    <button type={type} className="btn">
      {children}
    </button>
  );
};

export default Button;
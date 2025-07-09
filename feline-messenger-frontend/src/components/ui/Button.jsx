import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ 
  type = 'button', 
  disabled = false, 
  children,
  onClick,
  delay = 0
}) => {
  return (
    <motion.button
      type={type}
      className={`button ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
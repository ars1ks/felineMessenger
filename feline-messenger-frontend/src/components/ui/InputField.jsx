import React from 'react';
import { motion } from 'framer-motion';
import './InputField.css';

const InputField = ({ 
  type = 'text', 
  placeholder, 
  icon, 
  value, 
  onChange, 
  required = false,
  delay = 0
}) => {
  return (
    <motion.div 
      className="input-field"
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input-element"
      />
      {icon && <Icon name={icon} />}
    </motion.div>
  );
};

export default InputField;
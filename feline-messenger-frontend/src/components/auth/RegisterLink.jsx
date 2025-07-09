import React from 'react';
import { motion } from 'framer-motion';

const RegisterLink = ({ delay = 0 }) => {
  return (
    <motion.div 
      className="register-link"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <p>Нет аккаунта? <a href="#" className="register-link">Создай его бесплатно!</a></p>
    </motion.div>
  );
};

export default RegisterLink;
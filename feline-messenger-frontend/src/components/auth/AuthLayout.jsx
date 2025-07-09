import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/images/bg.jpg'; // Импортируем изображение
import './AuthLayout.css';

const AuthLayout = ({ children }) => {
  return (
    <div 
      className="auth-container"
      style={{ 
        background: `url(${bgImage}) no-repeat center center fixed`,
        backgroundSize: 'cover'
      }}
    >
      <motion.div 
        className="auth-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AuthLayout;
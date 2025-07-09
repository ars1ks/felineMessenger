import React from 'react';
import { motion } from 'framer-motion';
import Checkbox from '../ui/Checkbox';

const RememberForgot = ({ rememberMe, setRememberMe, delay = 0 }) => {
  return (
    <motion.div 
      className="remember-forgot"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <Checkbox 
        id="rememberMe"
        label="Запомнить меня"
        checked={rememberMe}
        onChange={() => setRememberMe(!rememberMe)}
      />
      <a href="#" className="forgot-link">Забыл пароль?</a>
    </motion.div>
  );
};

export default RememberForgot;
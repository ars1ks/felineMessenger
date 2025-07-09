import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InputField from '../ui/InputField';
import Button from '../ui/Button';
import RememberForgot from './RememberForgot';
import RegisterLink from './RegisterLink';

const LoginForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    

  // setTimeout(() => {
  //   console.log('Login submitted', { phone, rememberMe });
  //   setIsSubmitting(false);
  // }, 1500);
};

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Вход
      </motion.h1>
      

      <InputField 
        type="name"
        placeholder="Никнейм"
        icon=""
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        delay={0.3}
      />


      <InputField 
        type="email"
        placeholder="Почту"
        icon=""
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        delay={0.3}
      />
      
      <InputField 
        type="password"
        placeholder="Ключ шифрования"
        icon=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        delay={0.4}
      />
      
      <RememberForgot 
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        delay={0.5}
      />
      
      <Button 
        type="submit"
        disabled={isSubmitting}
        delay={0.6}
      >
        {isSubmitting ? (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
          </motion.span>
        ) : 'Войти'}
      </Button>
      
      <RegisterLink delay={0.7} />
    </form>
  );
};

export default LoginForm;
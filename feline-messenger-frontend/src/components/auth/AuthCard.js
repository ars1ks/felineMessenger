import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthCard = ({ isFlipped, onFlip }) => {
  return (
    <>
      <div className={`card-face card-front ${isFlipped ? 'hidden' : ''}`}>
        <LoginForm onFlip={() => onFlip(true)} />
      </div>
      
      <div className={`card-face card-back ${!isFlipped ? 'hidden' : ''}`}>
        <RegisterForm onFlip={() => onFlip(false)} />
      </div>
    </>
  );
};

export default AuthCard;
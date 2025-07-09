import React from 'react';
import InputField from '../ui/InputField';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';

const LoginForm = ({ onFlip }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика входа
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Вход</h1>
      
      <InputField 
        type="text"
        placeholder="Никнейм"
        icon="bx bxs-user"
        required
      />
      
      <InputField 
        type="email"
        placeholder="Почту"
        icon="bx bxs-envelope"
        required
      />
      
      <InputField 
        type="password"
        placeholder="Ключ шифрования"
        icon="bx bxs-lock-alt"
        required
      />
      
      <div className="remember-forgot">
        <Checkbox label="Запомнить меня" />
        <a href="#">Забыл пароль?</a>
      </div>
      
      <Button type="submit">Войти</Button>
      
      <div className="register-link">
        <p>Нет аккаунта? 
          <a href="#" onClick={(e) => { e.preventDefault(); onFlip(); }}>
            Создай его бесплатно!
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
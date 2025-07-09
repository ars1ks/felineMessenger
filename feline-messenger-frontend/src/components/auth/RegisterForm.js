import React from 'react';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

const RegisterForm = ({ onFlip }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика регистрации
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Регистрация</h1>
      
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
      
      <Button type="submit">Создать аккаунт</Button>
      
      <div className="register-link">
        <p>Уже имеется аккаунт? 
          <a href="#" onClick={(e) => { e.preventDefault(); onFlip(); }}>
            Войти
          </a>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
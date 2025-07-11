import React from 'react';

const RememberForgot = ({ rememberMe, setRememberMe, onForgotClick }) => {
  return (
    <div className="remember-forgot">
      <label>
        <input 
          type="checkbox" 
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        Запомнить меня
      </label>
      <button 
        type="button" 
        className="forgot-link"
        onClick={onForgotClick}
      >
        Забыл пароль?
      </button>
    </div>
  );
};

export default RememberForgot;
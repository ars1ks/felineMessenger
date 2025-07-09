import React, { useState } from 'react';
import StaticBackground from '../components/layout/StaticBackground'; // Изменили импорт
import CardContainer from '../components/layout/CardContainer';
import AuthCard from '../components/auth/AuthCard';

const AuthPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="auth-page">
      <StaticBackground /> {/* Заменили VideoBackground */}
      <CardContainer isFlipped={isFlipped}>
        <AuthCard 
          isFlipped={isFlipped} 
          onFlip={handleFlip} 
        />
      </CardContainer>
    </div>
  );
};

export default AuthPage;
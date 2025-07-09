import React from 'react';
import './StaticBackground.css';

const StaticBackground = () => {
  return (
    <div 
      className="static-background"
      style={{ 
        backgroundImage: 'url(/img/bg.jpg)',
        backgroundColor: '#1a1a2e'
      }}
    >
      {/* Индикатор загрузки */}
      <div style={{
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white'
      }}>
        {!window.loadedBackground }
      </div>
    </div>
  );
};

export default StaticBackground;
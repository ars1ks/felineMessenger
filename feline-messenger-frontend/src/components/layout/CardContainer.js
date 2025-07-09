import React, { useRef, useEffect } from 'react';

const CardContainer = ({ isFlipped, children }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const updateCardHeight = () => {
      if (containerRef.current && cardRef.current) {
        const activeFace = cardRef.current.querySelector(
          isFlipped ? '.card-back' : '.card-front'
        );
        
        if (activeFace) {
          const height = activeFace.offsetHeight;
          cardRef.current.style.height = `${height}px`;
          containerRef.current.style.height = `${height}px`;
        }
      }
    };

    updateCardHeight();
    window.addEventListener('resize', updateCardHeight);
    
    return () => window.removeEventListener('resize', updateCardHeight);
  }, [isFlipped]);

  return (
    <div 
      ref={containerRef}
      className={`card-container ${isFlipped ? 'flipped' : ''}`}
    >
      <div ref={cardRef} className="card">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
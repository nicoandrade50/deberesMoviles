import React, { useState, useEffect } from 'react';

const NotCleaningUpEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Solución: Limpiar el intervalo
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};



import React, { useState, useEffect } from 'react';

const MissingDependencyInUseEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
    // Solución: Incluir count en el array de dependencias
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};

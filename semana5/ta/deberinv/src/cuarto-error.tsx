import React, { useState } from 'react';

const IncorrectStateUpdate: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Incorrecto: Modificar el estado directamente
    //setCount(count + 1);
    // Solución: Utilizar la función de actualización del estado
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};



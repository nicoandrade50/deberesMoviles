import React, { useState } from 'react';

const DirectStateModification: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Incorrecto: Modificar el estado directamente
    //count++;
    // Solución: Utilizar la función de actualización del estado
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};



import React, { useState, useCallback } from 'react';

const NotUsingUseCallback: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // Incorrecto: No se utiliza useCallback
  const memoizedHandleClick = useCallback(handleClick, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={memoizedHandleClick}>Incrementar</button>
    </div>
  );
};




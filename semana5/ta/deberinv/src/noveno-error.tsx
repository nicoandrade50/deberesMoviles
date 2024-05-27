import React, { useState, useMemo } from 'react';

const NotUsingUseMemo: React.FC = () => {
  const [count, setCount] = useState(0);

  const isEven = () => {
    console.log("Checking if the number is even");
    return count % 2 === 0;
  };

  // Incorrecto: No se utiliza useMemo
  const memoizedIsEven = useMemo(isEven, [count]);

  return (
    <div>
      <p>{count}</p>
      {memoizedIsEven() ? <p>Es par</p> : <p>Es impar</p>}
    </div>
  );
};


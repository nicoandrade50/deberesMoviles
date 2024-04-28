// src/App.tsx
import React, { useState } from 'react';
import CandyCreator from './components/CandyCreator';
import ContadorProduccion from './components/ContadorProduccion';


const App: React.FC = () => {
  const [totalCandies, setTotalCandies] = useState<number>(0);

  const handleCandyCreate = () => {
    setTotalCandies(totalCandies + 1);
  };

  return (
    <div>
      <h1>Aplicación de Contador</h1>
      <CandyCreator onCandyCreate={handleCandyCreate} />
      <ContadorProduccion />
      <p>Total Candies: {totalCandies}</p>
    </div>
  );
};

export default App;

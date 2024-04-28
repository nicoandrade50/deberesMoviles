// src/components/CandyCreator.tsx
import React, { useState } from 'react';

const CandyCreator: React.FC<{ onCandyCreate: () => void }> = ({ onCandyCreate }) => {
  const [candyAmount, setCandyAmount] = useState<number>(0);

  const handleCreateCandy = () => {
    setCandyAmount(candyAmount + 1);
    onCandyCreate();
  };

  return (
    <div className="candy-creator">
      <h2>Candy Creator</h2>
      <p>Candies Created: {candyAmount}</p>
      <button onClick={handleCreateCandy}>Create Candy</button>
    </div>
  );
};

export default CandyCreator;

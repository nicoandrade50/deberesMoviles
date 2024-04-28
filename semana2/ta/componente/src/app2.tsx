import React from 'react';

interface UnmountingProps {
  productName: string;
  stopProduction: () => void;
}

const UnmountingComponent: React.FC<UnmountingProps> = ({ productName, stopProduction }) => {
  // Implement your logic to determine when to stop production
  // For this example, assume a button click stops production

  const handleClick = () => {
    stopProduction();
  };

  return (
    <div>
      <h2>Production status {productName}:</h2>
      <button onClick={handleClick}>Stop Production</button>
    </div>
  );
};

export default UnmountingComponent;

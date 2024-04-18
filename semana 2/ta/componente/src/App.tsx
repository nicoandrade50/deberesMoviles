import React, { useEffect, useState } from 'react';

interface MountingProps {
  productName: string;
}

const MountingComponent: React.FC<MountingProps> = ({ productName }) => {
  const [productionStatus, setProductionStatus] = useState('Initializing production...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setProductionStatus('Production in progress...');
    }, 2000);

    return () => {
      clearTimeout(timer); // Cleanup function to clear the timer on unmount
    };
  }, []);

  return (
    <div>
      <h2>Production status {productName}:</h2>
      <p>{productionStatus}</p>
    </div>
  );
};

export default MountingComponent;

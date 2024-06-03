import React, { useState, useEffect } from 'react';

const TOTAL_NUMBER_OF_NAMES = 26 * 26 * 10 * 10 * 10;

const usedNames: Set<number> = new Set();

const getNameByIndex = (i: number): string => {
  const ab = 'A'.charCodeAt(0);
  const nb = '0'.charCodeAt(0);
  const d2 = i % 10;
  const d1 = Math.floor(i / 10) % 10;
  const d0 = Math.floor(i / 100) % 10;
  const a1 = Math.floor(i / 1000) % 26;
  const a0 = Math.floor(i / 26000) % 26;
  return String.fromCharCode(ab + a0) + String.fromCharCode(ab + a1) 
    + String.fromCharCode(nb + d0) + String.fromCharCode(nb + d1) + String.fromCharCode(nb + d2);
};

const generateUniqueName = (): string => {
  if (usedNames.size >= TOTAL_NUMBER_OF_NAMES) {
    throw new Error('No more unique names available');
  }

  let ridx: number = Math.floor(Math.random() * TOTAL_NUMBER_OF_NAMES);
  while (usedNames.has(ridx)) {
    ridx = (ridx + 1) % TOTAL_NUMBER_OF_NAMES;
  }
  usedNames.add(ridx);
  return getNameByIndex(ridx);
};

const releaseNames = (): void => {
  usedNames.clear();
};

const App: React.FC = () => {
  const [currentName, setCurrentName] = useState<string>('');

  useEffect(() => {
    setCurrentName(generateUniqueName());
  }, []);

  const resetName = () => {
    setCurrentName(generateUniqueName());
  };

  const handleReleaseNames = () => {
    releaseNames();
    setCurrentName(generateUniqueName());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Robot Name: {currentName}</h1>
      <button onClick={resetName} style={{ margin: '10px', padding: '10px' }}>Reset Name</button>
      <button onClick={handleReleaseNames} style={{ margin: '10px', padding: '10px' }}>Release Names</button>
    </div>
  );
};

export default App;

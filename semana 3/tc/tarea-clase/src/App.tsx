import React, { useState } from 'react';

const EcuadorFlag: React.FC = () => {

  const colors = ['#FFD700', '#CE1126'];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);


  const toggleColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={toggleColor}
    >
      <div
        style={{
          backgroundColor: colors[currentColorIndex],
          flex: '1',
        }}
      ></div>
      <div
        style={{
          backgroundColor: colors[currentColorIndex === 0 ? 1 : 0],
          flex: '1',
        }}
      ></div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <EcuadorFlag />
    </div>
  );
};

export default App;


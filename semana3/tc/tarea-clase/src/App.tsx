import React, { useState } from 'react';

const EcuadorFlag: React.FC = () => {
  const colors = ['#FFD700', '#0053A0', '#CE1126'];
  const colorNames = ['Amarillo', 'Azul', 'Rojo'];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const toggleColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    const currentColorName = colorNames[currentColorIndex];
    alert(`El color es: ${currentColorName}`);
  };

  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer', // Cambia el cursor al hacer clic
      }}
      onClick={toggleColor}
    >
      <div
        style={{
          backgroundColor: colors[0], // Amarillo
          flex: '2', // Más grande
        }}
      ></div>
      <div
        style={{
          backgroundColor: colors[1], // Azul
          flex: '1', // Mediano
        }}
      ></div>
      <div
        style={{
          backgroundColor: colors[2], // Rojo
          flex: '1', // Mediano
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

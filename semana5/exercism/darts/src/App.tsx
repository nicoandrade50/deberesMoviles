
import React, { useState } from 'react';
import { calculateScore } from './score';

const App: React.FC = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'x') {
      setX(parseInt(value));
    } else if (name === 'y') {
      setY(parseInt(value));
    }
  };

  const handleCalculateScore = () => {
    const score = calculateScore(x, y);
    setResult(score);
  };

  return (
    <div>
      <h1>Calculadora de Puntaje de Dardos</h1>
      <div>
        <label>
          Coordenada X:
          <input type="number" name="x" value={x} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Coordenada Y:
          <input type="number" name="y" value={y} onChange={handleInputChange} />
        </label>
      </div>
      <button onClick={handleCalculateScore}>Calcular Puntaje</button>
      {result !== null && (
        <p>Para las coordenadas (x, y) = ({x}, {y}), el puntaje es: {result}</p>
      )}
    </div>
  );
};

export default App;

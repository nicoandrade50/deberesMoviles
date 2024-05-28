import React, { useState } from 'react';

interface Planets {
  [key: string]: number;
}

const RATIOS: Planets = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};


const AgeCalculator: React.FC = () => {
  const [planet, setPlanet] = useState<string>('earth');
  const [seconds, setSeconds] = useState<number>(0);

  const calculateAge = () => {
    const ageResult = Number((seconds / 31557600 / RATIOS[planet]).toFixed(2));
    alert(`Age on ${planet}: ${ageResult} years`);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <div>
        <label htmlFor="planet">Select a planet:</label>
        <select id="planet" value={planet} onChange={(e) => setPlanet(e.target.value)}>
          {Object.keys(RATIOS).map((planetName) => (
            <option key={planetName} value={planetName}>
              {planetName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="seconds">Enter seconds:</label>
        <input type="number" id="seconds" value={seconds} onChange={(e) => setSeconds(parseFloat(e.target.value))} />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
    </div>
  );
};

export default AgeCalculator;

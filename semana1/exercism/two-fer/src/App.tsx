import React from 'react';

export function twoFer(name = 'you'): string {
  return `One for ${name}, one for me.`;
}

const App: React.FC = () => {
  const result = twoFer(); // Llamada a la función twoFer sin argumentos
  
  return (
    <div>
      <h1>Two-Fer</h1>
      <p>{result}</p>
    </div>
  );
};

export default App;

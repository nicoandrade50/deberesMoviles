import React from 'react';
import { useConsoleStore } from '../store/consoleStore';

const ConsoleFactory: React.FC = () => {
  const { totalProduced, totalDistributed, inStock, produce, distribute, restock } = useConsoleStore();

  return (
    <div>
      <h2>Consolas de Juegos</h2>
      <p>Total producidas: {totalProduced}</p>
      <p>Total distribuidas: {totalDistributed}</p>
      <p>Consoles en Stock: {inStock}</p>
      <button onClick={produce}>Producir una consola</button>
      <button onClick={distribute} disabled={inStock === 0}>
        Distribuir una consola
      </button>
      <button onClick={() => restock(10)}>Reabastecer 10 consolas</button>
    </div>
  );
};

export default ConsoleFactory;

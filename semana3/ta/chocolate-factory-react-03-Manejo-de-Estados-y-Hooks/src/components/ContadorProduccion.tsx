// src/components/ContadorProduccion.tsx
import React, { useState, useEffect } from 'react';

const ContadorProduccion: React.FC = () => {
  const [produccion, setProduccion] = useState<number>(0);
  const [ganancia, setGanancia] = useState<number>(0);

  useEffect(() => {
    // Simulación de cálculo de ganancia basada en la producción
    setGanancia(produccion * 10); // Puedes ajustar la fórmula según sea necesario
  }, [produccion]);

  const aumentarProduccion = () => {
    setProduccion(produccion + 1);
  };

  return (
    <div className="contador-produccion">
      <h2>Contador de Producción y Ganancia</h2>
      <p>Producción: {produccion}</p>
      <p>Ganancia: ${ganancia}</p>
      <button onClick={aumentarProduccion}>Aumentar Producción</button>
    </div>
  );
};

export default ContadorProduccion;

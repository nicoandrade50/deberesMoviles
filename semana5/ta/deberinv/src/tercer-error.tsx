import React, { useState } from 'react';

const IncorrectSpreadUsage: React.FC = () => {
  const [data, setData] = useState({ name: '', age: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Incorrecto: Sobrescribir datos
    //setData({ name: e.target.value });
    // Solución: Fusionar el estado anterior con el nuevo estado
    setData({ ...data, name: e.target.value });
  };

  return (
    <div>
      <input type="text" name="name" value={data.name} onChange={handleChange} />
      <input type="number" name="age" value={data.age} onChange={handleChange} />
    </div>
  );
};

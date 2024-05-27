// src/App.tsx

import React, { useState } from 'react';
import { Matrix } from './Matrix';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('1 2 3\n4 5 6\n7 8 9');
  const [matrix, setMatrix] = useState<Matrix>(new Matrix(input));

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    setMatrix(new Matrix(newInput));
  };

  return (
    <div>
      <h1>Matrix Rows and Columns</h1>
      <textarea value={input} onChange={handleChange} rows={5} cols={30} />
      <h2>Rows:</h2>
      <pre>{JSON.stringify(matrix.rows, null, 2)}</pre>
      <h2>Columns:</h2>
      <pre>{JSON.stringify(matrix.columns, null, 2)}</pre>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { isPangram } from './isPangram';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [isPangramResult, setIsPangramResult] = useState<boolean | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleCheckPangram = () => {
    const result = isPangram(input);
    setIsPangramResult(result);
  };

  return (
    <div>
      <h1>Verificador de Pangramas</h1>
      <div>
        <label>
          Ingrese la oración:
          <input type="text" value={input} onChange={handleInputChange} />
        </label>
      </div>
      <button onClick={handleCheckPangram}>Verificar</button>
      {isPangramResult !== null && (
        <p>{isPangramResult ? "La oración es un pangrama" : "La oración no es un pangrama"}</p>
      )}
    </div>
  );
};

export default App;

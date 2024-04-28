import React, { useState } from 'react';

interface DNAMap {
  [key: string]: string;
}

const Map: DNAMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

const toRna = (dna: string): string => {
  if (/[^ACGT]/.test(dna)) {
    throw 'Invalid input DNA.';
  }
  return dna.replace(/[ATCG]/g, m => Map[m]);
};

export const DNAToRNAConverter: React.FC = () => {
  const [dnaInput, setDnaInput] = useState<string>('');
  const [rnaOutput, setRnaOutput] = useState<string>('');

  const convertToRNA = () => {
    try {
      const rna = toRna(dnaInput);
      setRnaOutput(rna);
    } catch (error) {
      alert(error); // Muestra un mensaje de error si el ADN de entrada es inválido
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>DNA to RNA Converter</h2>
      <input
        type="text"
        value={dnaInput}
        onChange={(e) => setDnaInput(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={convertToRNA}>Convert</button>
      {rnaOutput && (
        <p>RNA: {rnaOutput}</p>
      )}
    </div>
  );
};

export default DNAToRNAConverter;

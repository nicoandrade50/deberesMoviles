import React, { useState } from 'react';

interface UpdatingProps {
  handleChangeProductName: (newProductName: string) => void;
}

const UpdatingComponent: React.FC<UpdatingProps> = ({ handleChangeProductName }) => {
  const [newProductName, setNewProductName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProductName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChangeProductName(newProductName);
    setNewProductName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Product Name:
        <input type="text" value={newProductName} onChange={handleChange} />
      </label>
      <button type="submit">Change Product</button>
    </form>
  );
};

export default UpdatingComponent;

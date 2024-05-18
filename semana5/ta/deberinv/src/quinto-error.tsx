import React, { useState, useEffect } from 'react';

const AsyncOperationInEffect: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('url');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* mostrar datos */}
    </div>
  );
};



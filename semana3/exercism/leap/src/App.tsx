import React, { useState } from 'react';

export const LeapYearChecker: React.FC = () => {
  const [year, setYear] = useState<number>(0);
  const [isLeapYear, setIsLeapYear] = useState<boolean>(false);

  const checkLeapYear = () => {
    setIsLeapYear(isLeap(year));
  };

  const isLeap = (year: number): boolean => {
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Leap Year Checker</h2>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
        style={{ marginRight: '10px' }}
      />
      <button onClick={checkLeapYear}>Check</button>
      {isLeapYear !== null && (
        <p>{year} {isLeapYear ? 'is' : 'is not'} a leap year.</p>
      )}
    </div>
  );
};

export default LeapYearChecker;

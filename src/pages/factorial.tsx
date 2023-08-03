import { useState } from 'react';

export default function Fatorial () {
  const [number, setNumber] = useState<number | null>(null);
  const [factorial, setFactorial] = useState<number | null>(null);

  const calcFactorial = (num: number): number => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calcFactorial(num - 1);
    }
  };

  const handleCalc = () => {
    if (number !== null && number >= 0) {
      setFactorial(calcFactorial(number));
    } else {
      setFactorial(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFactorial(null);
    setNumber(parseInt(e.target.value));
  };

  return (
    <>
      <h1>Factorial</h1>
      <input
        type="number"
        value={number === null ? '' : number}
        onChange={handleInputChange}
      />
      <button onClick={handleCalc}>calculate</button>
      {factorial !== null && (
        <p>
          The factorial of {number} is {factorial}
        </p>
      )}
    </>
  );
};
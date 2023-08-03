import { useState } from 'react';

export default function InvestmentCalculator () {
  const [capital, setCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const parsedCapital = parseFloat(capital);
    const parsedInterestRate = parseFloat(interestRate);
    const parsedTime = parseInt(time);

    const interest = parsedCapital * (parsedInterestRate / 100) * (parsedTime / 12);
    setResult(parsedCapital + interest);
  };

  return (
    <>
      <h2>Interest Calculation</h2>
      <div>
        <label>initial capital:</label>
        <input type="number" value={capital} onChange={(e) => setCapital(e.target.value)} />
      </div>
      <div>
        <label>interest rate (%):</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>
      <div>
        <label>investment time (months):</label>
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Final value: {result.toFixed(2)}</p>}
    </>
  );
};
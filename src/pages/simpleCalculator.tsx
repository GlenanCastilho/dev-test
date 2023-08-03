import { useState } from 'react';

export default function SimpleCalculator () {
  const [num1, setnum1] = useState<number>(0);
  const [num2, setnum2] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');
  const [result, setResult] = useState<number | string>('');

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>, numType: 'num1' | 'num2') => {
    setResult('');
    const value = parseFloat(e.target.value);
    numType === 'num1' ? setnum1(value) : setnum2(value);
  };

  const handleOperatorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResult('');
    setOperator(e.target.value);
  };

  const calcResult = () => {
    if (!operator) {
      setResult('Select an operator');
      return;
    }

    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num2 !== 0 ? num1 / num2 : 'undefined');
        break;
      default:
        setResult('select a operator');
    }
  };

  return (
    <>
      <h1>Simple Calculator</h1>
      <input type="number" value={num1} onChange={(e) => handleNumChange(e, 'num1')} />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => handleNumChange(e, 'num2')} />
      <button onClick={calcResult}>=</button>
      <h2>Result: {typeof result === 'number' ? result.toFixed(2) : result}</h2>
    </>
  );
};
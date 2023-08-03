import { useState } from 'react';

export default function Table () {
  const [number, setNumber] = useState<number>(1);

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNum = Number(e.target.value);
    setNumber(isNaN(inputNum) ? 0 : inputNum);
  };

  const table = Array.from({ length: 10 }, (_, index) => ({
    multi: index + 1,
    result: number * (index + 1),
  }));

  return (
    <>
      <h1>Table</h1>
      <input type="number" value={number} onChange={handleNumChange} />
      <table>
        <tbody>
          {table.map((entry) => (
            <tr key={entry.multi}>
              <td>{number}</td>
              <td>&times;</td>
              <td>{entry.multi}</td>
              <td>=</td>
              <td>{entry.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
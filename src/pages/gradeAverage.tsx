import { useState } from 'react';

export default function GradeAverage() {
  const [grade1, setgrade1] = useState<number>(0);
  const [grade2, setgrade2] = useState<number>(0);
  const [grade3, setgrade3] = useState<number>(0);
  const [average, setaverage] = useState<number | null>(null);

  const calcAverage = () => {
    const totalGrades = grade1 + grade2 + grade3;
    const averageCalculated = totalGrades / 3;
    setaverage(averageCalculated);
  };

  return (
    <>
      <h1>Grade Average</h1>
      <div>
        <label>Grade 1:</label>
        <input type="number" value={grade1} onChange={(e) => setgrade1(Number(e.target.value))} />
      </div>
      <div>
        <label>Grade 2:</label>
        <input type="number" value={grade2} onChange={(e) => setgrade2(Number(e.target.value))} />
      </div>
      <div>
        <label>Grade 3:</label>
        <input type="number" value={grade3} onChange={(e) => setgrade3(Number(e.target.value))} />
      </div>
      <button onClick={calcAverage}>Calculate</button>
      {average !== null && <p>The average is: {average.toFixed(2)}</p>}
    </>
  );
};
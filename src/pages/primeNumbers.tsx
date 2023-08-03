import { useState } from 'react';

export default function PrimeNumbers () {
  const [number, setNumber] = useState<number>(0);
  const [isNumPrime, setisNumPrime] = useState<boolean>(false);

  function isPrime(number: number): boolean {
    if (number <= 1) return false;
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNumber(value);
    setisNumPrime(isPrime(value));
  };

  function getFirstTenPrimes(): number[] {
    const primes: number[] = [];
    let num = 2;
    while (primes.length < 10) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  }

  const firstTenPrimes = getFirstTenPrimes();

  return (
    <>
      <h1>Prime Numbers</h1>
      <input type="number" value={number} onChange={handleChange} />
      {isNumPrime ? (
        <p>{`${number} is a prime number`}</p>
      ) : (
        <p>{`${number} is not a prime number`}</p>
      )}

      <h1>First 10 prime numbers</h1>
      <ul>
        {firstTenPrimes.map((primeNum, index) => (
          <li key={index}>{primeNum}</li>
        ))}
      </ul>
    </>
  );
};
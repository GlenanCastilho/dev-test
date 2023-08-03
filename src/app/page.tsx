import Link from "next/link";

export default function Home() {
  return (
    <ul>
    <li>
      <Link href="/simpleCalculator">Simple Calculator</Link>
    </li>
    <li>
      <Link href="/primeNumbers">Prime Numbers</Link>
    </li>
    <li>
      <Link href="/factorial">Factorial</Link>
    </li>
    <li>
      <Link href="/palindrome">Palindrome</Link>
    </li>
    <li>
      <Link href="/table">Table</Link>
    </li>
    <li>
      <Link href="/vowelCounter">Vowel Counter</Link>
    </li>
    <li>
      <Link href="/gradeAverage">Grade Average</Link>
    </li>
    <li>
      <Link href="/interestCalculation">Interest Calculation</Link>
    </li>
  </ul>
  )
}

import { useState } from "react";

export default function VowelCounter () {
  const [inputValue, setInputValue] = useState("");
  const [vowelCount, setVowelCount] = useState<number | null>(null);

  const countVowels = (str: string) => {
    const vowels = "AEIOUaeiou";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        count++;
      }
    }
    return count;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setVowelCount(null);
  };

  const handleCountVowels = () => {
    const count = countVowels(inputValue);
    setVowelCount(count);
  };

  return (
    <>
      <h1>Vowel Counter</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleCountVowels}>Count</button>
      {vowelCount !== null ? (
        vowelCount !== 0 ? (
          <p>
            "{inputValue}" has {vowelCount} vowel(s).
          </p>
        ) : (
          <p>
            "{inputValue}" has no vowels.
          </p>
        )
      ) : null}
    </>
  );
};


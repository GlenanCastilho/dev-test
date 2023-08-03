import React, { useState } from "react";

export default function Palindrome ()  {
  const [word, setWord] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);

  const checkPalindrome = (input: string) => {
    const cleanWord = input.toLowerCase();
    const reverseWord = cleanWord.split("").reverse().join("");
    return cleanWord === reverseWord;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPalindrome(null);
    setWord(e.target.value);
  };

  const handleCheckPalindrome = () => {
    setIsPalindrome(checkPalindrome(word));
  };

  return (
    <>
      <h1>Palindrome</h1>
      <input type="text" value={word} onChange={handleInputChange} />
      <button onClick={handleCheckPalindrome}>Check</button>
      {isPalindrome !== null && (
        <p>The word "{word}" {isPalindrome ? "is" : "is not"} a palindrome.</p>
      )}
    </>
  );
};
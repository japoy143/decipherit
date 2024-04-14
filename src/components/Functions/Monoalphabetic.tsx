export const keys = [
  "zyxwvutsrqponmlkjihgfedcba",
  "yzwxuvstqropmnklijghefcdab",
];

export const MonoalphabeticCipher = (
  input: string,
  key: string,
  setInput: (value: string) => void,
  setOutput: (value: string) => void
) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letter = "";
  for (let i = 0; i < input.length; i++) {
    const indexOfLetter = alphabet.indexOf(input[i]);
    const value = key[indexOfLetter];
    letter += `${value}`;
  }
  setInput(input);
  setOutput(letter);
};

export const MonoalphabeticPlayCipher = (word: string, key: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letter = "";

  for (let i = 0; i < word.length; i++) {
    const indexOfLetter = alphabet.lastIndexOf(word[i].toLocaleLowerCase());
    const value = key[indexOfLetter];
    letter += `${value}`;
  }

  return letter;
};

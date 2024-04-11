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

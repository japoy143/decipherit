export const CaesarShiftPlay = (word: string, shift: number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let toTheRightText = "";
  for (let i = 0; i < word.length; i++) {
    const indexOfLetter = alphabet.indexOf(word[i].toLowerCase());
    if (indexOfLetter === -1) {
      // Skip non-alphabet characters
      toTheRightText += word[i];
      continue;
    }
    const toTheRightIndex = (indexOfLetter + shift) % alphabet.length;
    toTheRightText += alphabet[toTheRightIndex];
  }
  return toTheRightText;
};

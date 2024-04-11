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

export const CaesarShiftPlayLeft = (word: string, shift: number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let toTheLeftText = "";
  for (let i = 0; i < word.length; i++) {
    const indexOfLetter = alphabet.indexOf(word[i].toLowerCase());
    if (indexOfLetter === -1) {
      toTheLeftText += word[i];
      continue;
    }
    let toTheLeftIndex = indexOfLetter - shift;
    // Handle negative indices by wrapping around to the end of the alphabet
    if (toTheLeftIndex < 0) {
      toTheLeftIndex = alphabet.length + toTheLeftIndex;
    }
    toTheLeftText += alphabet[toTheLeftIndex];
  }
  return toTheLeftText;
};

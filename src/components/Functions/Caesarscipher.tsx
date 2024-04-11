// const alphabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// const CaesarShift = (
//   inputs: string,
//   shifts: number,
//   setValue: (value: string) => void,
//   setOutput: (value: string) => void
// ) => {
//   const splittedInput = inputs.split("");
//   const word = [];
//   for (let i = 0; i < splittedInput.length; i++) {
//     const indexInAlphabet = alphabet.indexOf(splittedInput[i]);
//     const addedShift = indexInAlphabet + shifts;
//     const totalIndex = 26;
//     if (addedShift > totalIndex) {
//       const remainingIndex = addedShift % totalIndex;
//       console.log(addedShift);
//       word.push(alphabet[remainingIndex]);
//     } else {
//       word.push(alphabet[addedShift]);
//     }
//   }

//   const shifted = word.join("");
//   setValue(inputs);
//   setOutput(shifted);
// };

const CaesarShift = (
  input: string,
  shift: number,
  setValue: (value: string) => void,
  setToTheRight: (value: string) => void,
  setToTheLeft: (value: string) => void
) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let toTheRightText = "";
  let toTheLeftText = "";
  for (let i = 0; i < input.length; i++) {
    const indexOfLetter = alphabet.indexOf(input[i]);
    const toRightIndex = indexOfLetter + shift;
    const toTheLeftIndex = indexOfLetter - shift;
    if (toRightIndex > alphabet.length - 1) {
      const remainder = (indexOfLetter + shift) % alphabet.length;
      toTheRightText += `${alphabet[remainder]}`;
    } else {
      toTheRightText += `${alphabet[toRightIndex]}`;
    }
    if (toTheLeftIndex <= -1) {
      const nonNegativeLeftIndex = Math.abs(indexOfLetter - shift);
      const totalIndex = alphabet.length;
      const deducted = totalIndex - nonNegativeLeftIndex;
      toTheLeftText += `${alphabet[deducted]}`;
    } else {
      toTheLeftText += `${alphabet[toTheLeftIndex]}`;
    }
  }

  setValue(input);
  setToTheRight(toTheRightText);
  setToTheLeft(toTheLeftText);
};

export default CaesarShift;

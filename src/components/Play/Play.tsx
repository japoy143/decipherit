import { useState } from "react";
import { wordsAndMeaning } from "../../models/words";
import {
  CaesarShiftPlay,
  CaesarShiftPlayLeft,
} from "../Functions/PlayFuntions/CeasarShift";
import { toast } from "sonner";
const num = Math.floor(Math.random() * 10) + 1;
function Play() {
  const [userInput, setInput] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [correct, setCorrect] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [shiftDirection, setShiftDirection] = useState<boolean>(false);
  const handleAnswer = (input: string) => {
    const trimmedInput = input.trim();
    setInput(trimmedInput);
    const word = wordsAndMeaning[index].word;
    if (trimmedInput.toLowerCase() === word.toLocaleLowerCase()) {
      toast.success("correct");
      setScore((prev) => prev + 10);
      setIndex((prev) => prev + 1);
      setCorrect([...correct, word]);
    }
  };
  return (
    <section className=" h-screen  grid  grid-cols-10  place-content-center ">
      <div></div>
      <div className=" col-span-8 bg-[#455D72] h-[800px]  rounded-md grid grid-cols-2  shadow-lg py-8">
        <div className=" grid grid-rows-[200px,auto]  pt-2  border-r border-#FFFFFF  ">
          <div className=" flex flex-col justify-center items-center space-y-4">
            <h1 className=" text-2xl text-white font-semibold">
              Caesar's Shift
            </h1>

            <input
              className="mt-4 h-10 w-[260px] bg-[#27374D] rounded-md text-white text-center text-2xl"
              value={userInput}
              onChange={(e) => handleAnswer(e.target.value)}
            />

            <div className=" flex flex-row  space-x-2">
              <h1 className="text-white font-medium text-xl">Num Of Shifts:</h1>
              <p className="text-white font-medium text-xl">{num}</p>
            </div>

            <div className=" flex flex-row  space-x-2">
              <h1 className="text-white font-medium text-xl">Score:</h1>
              <p className="text-white font-medium text-xl">{score}</p>
            </div>

            <button
              className="p-2 rounded-md w-300  text-sm bg-white font-bold text-[#27374D]"
              onClick={() => setShiftDirection((prev) => !prev)}
            >
              {shiftDirection ? <>To The Left</> : <>To The Right</>}
            </button>
          </div>

          {wordsAndMeaning.map((words, i) => {
            if (i === index) {
              return (
                <div className=" px-10  grid grid-rows-[200px,auto] py-4  place-content-center">
                  <div className=" h-14 w-full bg-white rounded-lg opacity-75  text-center place-content-center text-2xl font-semibold  text-[#27374D]">
                    <p>
                      {shiftDirection
                        ? CaesarShiftPlayLeft(words.word, num)
                        : CaesarShiftPlay(words.word, num)}
                    </p>
                  </div>
                  <h1 className=" text-xl text-white text-center overflow-clip ">
                    Hint: {words.meaning}
                  </h1>

                  <div className="  flex flex-col  items-center pt-4 overflow-auto place-content-center"></div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex flex-col  items-center pt-2 px-4 ">
          <h1 className="text-2xl text-white font-semibold"> Correct</h1>
          <div className="mt-4 bg-[#ffff] h-[600px] w-[100%] rounded-md opacity-50 text-center py-4 px-4 space-y-4 overflow-auto">
            {correct.map((correctword) => (
              <p className="p-4 bg-primary rounded-md  text-white font-semibold text-2xl">
                {correctword}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Play;

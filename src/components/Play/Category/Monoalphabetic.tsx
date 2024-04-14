import Keys1 from "../../SVG/keys1";
import Keys2 from "../../SVG/keys2";
import Letters from "../../SVG/letters";
import { wordsAndMeaning } from "../../../models/words";
import { useEffect, useState } from "react";
import { MonoalphabeticPlayCipher } from "../../Functions/Monoalphabetic";
import { keys } from "../../Functions/Monoalphabetic";
import { toast } from "sonner";
const correct: string[] = [];
function MonoalphabeticPlay() {
  const [input, setInput] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [Num, setNum] = useState<number>(1);
  const [Score, setScore] = useState<number>(0);

  const HandleInput = (letter: string) => {
    if (
      letter.toLocaleLowerCase() ===
      wordsAndMeaning[index].word.toLocaleLowerCase()
    ) {
      correct.push(wordsAndMeaning[index].word);
      setIndex((prev) => prev + 1);
      toast.success("correct");
      setScore((prev) => prev + 10);
      setInput("");
    } else {
      setInput(letter);
    }
  };
  useEffect(() => {
    setNum(Math.floor(Math.random() * 2));
  }, []);
  return (
    <section className=" h-screen grid grid-cols-10   py-28">
      <div></div>
      <div className=" col-span-8 bg-[#455D72] rounded-md grid grid-rows-[300px,auto]">
        <div className=" p-4    ">
          <h1 className=" text-center text-xl text-white font-semibold">
            Monoalphabetic Cipher
          </h1>
          <br />
          <div className=" flex flex-row  justify-center ">
            <input
              className="h-10 bg-primary rounded-md w-[80%]  text-center text-white text-2xl"
              value={input}
              onChange={(e) => HandleInput(e.target.value)}
            />
          </div>
          <br />
          <p className=" text-white text-xl font-semibold">Letter</p>
          <Letters className=" h-[10%] w-[95%]" />
          <p className=" text-white text-xl font-semibold">Keys</p>
          {Num === 0 ? (
            <Keys1 className=" h-[20%] w-[95%]" />
          ) : (
            <Keys2 className=" h-[20%] w-[95%]" />
          )}
        </div>
        <div className=" flex-1 grid grid-cols-2 border-t ">
          <div className=" px-4 place-content-center  ">
            {wordsAndMeaning.map((word, i) => {
              if (i === index) {
                return (
                  <div className=" space-y-10">
                    <h1 className=" text-center text-white text-xl font-semibold">
                      Score: {Score}
                    </h1>
                    <div className=" bg-[#D9D9D9] p-4 rounded-md  text-center text-[#455D72] font-semibold text-2xl">
                      <p>{MonoalphabeticPlayCipher(word.word, keys[Num])}</p>
                    </div>
                    <p> hint: {word.meaning}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className=" px-4 py-8 border-l">
            <h1 className=" text-center pt-8 text-white text-2xl font-semibold">
              Correct
            </h1>
            <div className=" overflow-auto bg-[#A2AEB8] h-[400px]  rounded-md mt-2 p-4 space-y-6">
              {correct.map((ciphered) => (
                <div className=" bg-[#364A5F] h-10 w-full rounded-md flex flex-row  items-center justify-center">
                  <p className=" text-xl text-[#FFFFFF] text-center">
                    {ciphered}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default MonoalphabeticPlay;

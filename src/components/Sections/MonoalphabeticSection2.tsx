import { useState } from "react";
import { MonoalphabeticCipher } from "../Functions/Monoalphabetic";
import MonoalphabeticsectionSVG2 from "../SVG/monoalphabeticsection2";
import { keys } from "../Functions/Monoalphabetic";
function MonoalphabeticSection2() {
  const [change, setChange] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  return (
    <section className=" h-screen grid grid-rows-[400px,auto] gap-10 ">
      <div className=" flex flex-row justify-center ">
        <MonoalphabeticsectionSVG2 className=" w-[800px]" />
      </div>
      <div className="  flex flex-row justify-center">
        <div className=" flex flex-col space-y-4">
          <div className=" flex flex-row justify-between">
            <label className=" text-white text-3xl font-semibold">Input</label>
            <button
              className=" h-10 w-14 bg-[#455D72] rounded-md text-white  font-medium"
              onClick={() => setChange(!change)}
            >
              {change ? <>Set B</> : <>Set A</>}
            </button>
          </div>
          <input
            className=" h-16 w-[540px] bg-[#455D72] rounded-md px-6 text-white text-3xl font-medium capitalize"
            value={input}
            onChange={(e) =>
              MonoalphabeticCipher(
                e.target.value,
                change ? keys[1] : keys[0],
                setInput,
                setOutput
              )
            }
          />
          <label className=" text-white text-3xl font-semibold">Output</label>
          <input
            className=" h-16 w-[540px] bg-[#455D72] rounded-md px-6 text-white text-3xl font-medium capitalize"
            value={output}
            readOnly
          />
        </div>
      </div>
    </section>
  );
}

export default MonoalphabeticSection2;

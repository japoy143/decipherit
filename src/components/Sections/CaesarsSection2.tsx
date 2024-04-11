import { useState } from "react";
import CaesarShift from "../Functions/Caesarscipher";
function CaesarsSection2() {
  const [answer1, setAnswer1] = useState<string>("");
  const [numOfShifts, setNumOfShifts] = useState<number>(1);
  const [caesar, setCaesar] = useState<string>("");
  const [toTheRight, setToTheRight] = useState<string>("");
  const [toTheLeft, setToTheLeft] = useState<string>("");

  const Submit = (answer: string) => {
    if (answer === "rainier") {
      alert("Correct Answer");
      setAnswer1("");
    } else {
      alert("Wrong Answer");
    }
  };
  return (
    <section className=" grid grid-cols-2 px-20 h-screen">
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-3xl text-white font-semibold">Decipher this:</h1>
        <br />
        <input
          value="udlqlhu"
          className=" bg-[#526D82] h-10 w-[200px] rounded-md  text-center text-white text-2xl"
        />
        <br />
        <p className=" text-3xl text-white font-semibold">
          Hint this is using 3 shift
        </p>
        <br />

        <p className=" text-3xl text-white font-semibold">Answer:</p>
        <br />
        <input
          type="text"
          value={answer1}
          onChange={(text) => setAnswer1(text.target.value)}
          className=" bg-[#526D82] h-10 w-[200px] rounded-md  text-center text-white text-2xl"
        />
        <br />
        <button
          onClick={() => Submit(answer1)}
          className=" h-10 w-[100px] bg-[#526D82] rounded-md text-xl text-white font-medium"
        >
          Submit
        </button>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <br />
        <div className=" flex flex-row  space-x-2">
          <p className=" text-xl text-white font">Num of shifts</p>

          <input
            className=" w-[30px] rounded-sm text-center"
            value={numOfShifts}
            onChange={(e) => {
              const parsedValue = parseInt(e.target.value, 10);
              setNumOfShifts(isNaN(parsedValue) ? 0 : parsedValue);
            }}
          />
        </div>
        <br />
        <input
          className="bg-[#526D82] h-10 w-[200px] rounded-md  text-center text-white text-2xl "
          placeholder="input here:"
          value={caesar}
          type="text"
          onChange={(e) =>
            CaesarShift(
              e.target.value,
              numOfShifts,
              setCaesar,
              setToTheRight,
              setToTheLeft
            )
          }
        />
        <br />
        <h1 className=" text-white text-3xl font-semibold">Output:</h1>
        <br />
        <p className="text-white text-xl font-semibold">From left to right</p>
        <br />
        <input
          className="bg-[#526D82] h-10 w-[200px] rounded-md  text-center text-white text-2xl"
          value={toTheRight}
          readOnly
        />
        <br />
        <p className="text-white text-xl font-semibold">From right to left</p>
        <br />
        <input
          className="bg-[#526D82] h-10 w-[200px] rounded-md  text-center text-white text-2xl"
          value={toTheLeft}
          readOnly
        />
      </div>
    </section>
  );
}

export default CaesarsSection2;

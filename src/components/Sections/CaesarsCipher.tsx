import Ciphered from "../SVG/ciphered";
import Deciphered from "../SVG/diciphered";
import TitleSvg from "../SVG/titleSvg";

function CaesarsCipher() {
  return (
    <section className=" h-screen  space-y-14 ">
      <header className=" text-center text-white text-5xl font-semibold">
        <h1>Caesar's cipher</h1>
      </header>
      <article className=" grid grid-cols-2 px-10 gap-10 ">
        <div className=" flex flex-col justify-center items-center space-y-4 text-3xl text-white font-medium text-justify  ">
          <p>
            The Caesar cipher is a simple encryption technique that was used by
            Julius Caesar to send secret messages to his allies. It works by
            shifting the letters in the plaintext message by a certain number of
            positions, known as the “shift” or “key”.
          </p>
          <p>
            The Caesar cipher is a simple encryption technique that was used by
            Julius Caesar to send secret messages to his allies. It works by
            shifting the letters in the plaintext message by a certain number of
            positions, known as the “shift” or “key”.
          </p>
        </div>
        <div className=" flex flex-col justify-evenly">
          <div className=" flex flex-col    items-center">
            <TitleSvg className="h-12 w-[350px]" />
            <Ciphered className=" h-14" />
            <TitleSvg className="h-12 w-[350px]" />
            <Deciphered className=" h-14" />
            <p className="mt-8 text-white font-semibold text-2xl  text-justify">
              This is using Caesar's cipher 3 shift.
            </p>
          </div>
          <br />
          <div className="text-2xl text-white  font-medium space-x-4 ">
            <p className=" space-x-8 text-center">
              <span>A</span>
              <span>L</span>
              <span>L</span>
              <span>A</span>
              <span>N</span>
            </p>
            <br />
            <div className=" text-center ">
              <p>A becomes D (shift 3 from A)</p>
              <p>L becomes O (shift 3 from L)</p>
              <p>A becomes D (shift 3 from A)</p>
              <p>N becomes Q (shift 3 from N)</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default CaesarsCipher;

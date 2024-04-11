import TitleSvg from "../SVG/titleSvg";
import Ciphered from "../SVG/ciphered";
import Deciphered from "../SVG/diciphered";
function Decipherit() {
  return (
    <section className=" h-screen grid grid-cols-2 items-center text-3xl font-medium text-white px-10 gap-10 ">
      <article className=" flex flex-col justify-center  space-y-4  text-justify">
        <TitleSvg className=" h-16 " />
        <p className=" ">
          is a game that will teach you different kinds of cryptography methods
          thought the games and brief introduction of every methods on how to
          decipher it.
        </p>
      </article>
      <div className="  flex flex-col  items-center text-center  justify-center space-y-4">
        <TitleSvg className="h-12 w-[350px]" />
        <Ciphered className=" h-14" />
        <TitleSvg className="h-12 w-[350px]" />
        <Deciphered className=" h-14" />
      </div>
    </section>
  );
}

export default Decipherit;

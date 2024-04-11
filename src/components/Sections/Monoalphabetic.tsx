import MonoalphabeticSVG from "../SVG/monoalphabetic";
function Monoalphabetic() {
  return (
    <section className="h-screen grid grid-rows-[100px,auto] py-30">
      <header className="">
        <h1 className="text-white text-5xl font-semibold text-center">
          Monoalphabetic Cipher
        </h1>
      </header>
      <article className="  grid grid-rows-[340px,auto] gap-20 lg:gap-0">
        <div className="grid grid-cols-2 px-10 text-3xl text-white font-semibold  text-justify">
          <aside className="px-10">
            <p>
              A mono-alphabetic cipher(aka simple substitution cipher) is a
              substitution cipher where each letter of the plain text is
              replaced with another letter of the alphabet. It uses a fixed key
              which consist of the 26 letters of a “shuffled alphabet”.
            </p>
          </aside>
          <aside className="px-10">
            <p>
              For example, if the plain text has a character 'a' and the value
              of the key is 5, then 'a' will be substituted with 'f' because 'f'
              is 5 characters from 'a' as per the key used for the additive
              monoalphabetic cipher process.
            </p>
          </aside>
        </div>
        <div className="  flex flex-row justify-center ">
          <MonoalphabeticSVG className=" h-100 w-[700px]  lg:w-[1000px]" />
        </div>
      </article>
    </section>
  );
}

export default Monoalphabetic;

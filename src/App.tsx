import { useState } from "react";
import Header from "./components/Nav/Header";
import Nav from "./components/Nav/Nav";
import Play from "./components/Play/Play";
import MonoalphabeticPlay from "./components/Play/Category/Monoalphabetic";
import { Toaster } from "sonner";
import {
  CaesarsCipher,
  Decipherit,
  Introduction,
  CaesarsSection2,
  Monoalphabetic,
  MonoalphabeticSection2,
} from "./components/Sections/export";
function App() {
  const [num, setnum] = useState<number>(0);
  const sections = [
    [
      <Introduction />,
      <Decipherit />,
      <CaesarsCipher />,
      <CaesarsSection2 />,
      <Monoalphabetic />,
      <MonoalphabeticSection2 />,
    ],
    [<Play />, <MonoalphabeticPlay />],
  ];

  const setHome = () => {
    setnum(0);
  };
  const setPlay = () => {
    setnum(1);
  };
  return (
    <>
      <div className=" bg-primary h-screen">
        <Toaster position="top-center" richColors />
        <Header />

        <main className="grid grid-cols-5 bg-primary shadow-lg ">
          <aside className=" col-span-1 h-screen  z-10   fixed left-0  shadow-2xl py-20 ">
            <Nav
              className=" flex flex-col   text-justify p-6 space-y-6 text-white text-xl font-medium"
              setHome={() => setHome()}
              setPlay={() => setPlay()}
              numPage={num}
            />
          </aside>
          <div className=" col-span-5 grid grid-rows-auto bg-primary z-0 ml-40 ">
            {sections[num].map((secs) => {
              return secs;
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

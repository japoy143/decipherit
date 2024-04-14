type NavProps = {
  className: string;
  setHome: () => void;
  setPlay: () => void;
  numPage: number;
};

function Nav({ className, setHome, setPlay, numPage }: NavProps) {
  return (
    <ul className={className}>
      <li
        onClick={setHome}
        className={`  cursor-pointer ${
          numPage === 0 ? "opacity-100" : "opacity-50"
        }`}
      >
        Home
      </li>
      <li
        onClick={setPlay}
        className={`  cursor-pointer ${
          numPage === 1 ? "opacity-100" : "opacity-50"
        }`}
      >
        Play
      </li>
      <li className=" text-base indent-2">
        Ceasar
        <br />
        <p>Cipher</p>
      </li>
      <li className=" text-sm indent-2">
        Monoalphabetic
        <br />
        <p>Cipher</p>
      </li>
    </ul>
  );
}

export default Nav;

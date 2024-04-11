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
    </ul>
  );
}

export default Nav;

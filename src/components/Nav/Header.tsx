import TitleSvg from "../SVG/titleSvg";

function Header() {
  return (
    <nav className="grid grid-cols-4 p-4  shadow-lg bg-primary  fixed  w-screen top-0 z-50 ">
      <div className=" col-span-1   flex flex-row items-center justify-center">
        <TitleSvg className=" h-16 " />
      </div>
    </nav>
  );
}

export default Header;

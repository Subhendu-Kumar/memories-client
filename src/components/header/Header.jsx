import logo from "/subh logo 1.png";

function Header() {
  return (
    <div className="w-full h-24 px-80 max-sm:px-4 p-4">
      <div className="w-full h-full bg-blue-500 rounded-xl flex justify-center gap-2 items-center max-sm:justify-evenly">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
          <img src={logo} alt="image logo" className="w-10 h-10" />
        </div>
        <h2 className="text-2xl text-blue-50 font-semibold">Memories</h2>
        <h2 className="text-2xl text-blue-50 font-semibold max-sm:hidden">
          (The Simple CRUD App)
        </h2>
      </div>
    </div>
  );
}

export default Header;

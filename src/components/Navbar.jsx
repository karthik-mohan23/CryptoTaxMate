import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full  bg-white text-f-primary drop-shadow">
      <div className="w-[90%] max-w-[83rem] mx-auto h-[60.75px] lg:h-20 flex justify-between items-center">
        <img
          src={logo}
          alt="KoinX"
          className="w-20 h-[20.5px] lg:w-24 lg:h-6"
        />
        <nav></nav>
      </div>
    </header>
  );
};
export default Navbar;

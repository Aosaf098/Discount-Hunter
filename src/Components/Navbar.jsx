import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";
import Dropdown from "./Dropdown";
import Welcome from "./Welcome";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between lg:px-2 px-6 lg:justify-evenly py-3 bg-[#f3f3f3]">
        <div className="">
          <img className="w-16" src={logo} alt="" />
        </div>
        <div className="hidden lg:block ml-32">
          <ul className="flex items-center gap-8">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/brands'}>Brands</NavLink>
            <li>About Dev</li>
            <li>My Profile</li>
          </ul>
        </div>
        <div className="block lg:hidden">
            <Dropdown />
        </div>
        <div className="hidden lg:block space-x-4">
          <button className="bg-green-400 px-4 py-2 rounded-lg hover:bg-green-500">
            Sign In
          </button>
          <button className="bg-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500">
            Register
          </button>
        </div>
      </nav>
      <div className="mx-auto bg-[#f3f3f3]">
        <Welcome />
      </div>
    </>
  );
};

export default Navbar;

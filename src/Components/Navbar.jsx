import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png";
import Dropdown from "./Dropdown";
import Welcome from "./Welcome";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // const { displayName, photoURL } = currentUser;

  return (
    <>
      <nav className="flex items-center justify-between lg:px-2 px-6 lg:justify-around py-3 bg-[#f3f3f3]">
        <div className="">
          <img className="w-16" src={logo} alt="" />
        </div>
        <div className="hidden lg:block ml-32">
          <ul className="flex items-center gap-8">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/brands"}>Brands</NavLink>
            <Link>About Dev</Link>
            {(user && user?.email) && <Link>My Profile</Link>}
          </ul>
        </div>
        <div className="block lg:hidden">
          <Dropdown />
        </div>
        <div className="hidden lg:block space-x-4">
          {user && user?.email ? (
            <div className="flex items-center gap-6">
              <p className="font-semibold">{user?.email}</p>
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
              <button onClick={logOutUser} className="bg-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500">
                Log Out
              </button>
            </div>
          ) : (
            <div className="hidden lg:block space-x-4">
              <Link
                to={"/auth/login"}
                className="bg-green-400 px-4 py-2 rounded-lg hover:bg-green-500"
              >
                Sign In
              </Link>
              <Link
                to={"/auth/register"}
                className="bg-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className="mx-auto bg-[#f3f3f3]">
        {(user && user?.email) && <Welcome />}
      </div>
    </>
  );
};

export default Navbar;

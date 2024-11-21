import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <>
      <details className="dropdown">
        <summary className="btn m-1 bg-white border-none">
          <RxHamburgerMenu size={20} />
        </summary>
        <ul className="menu dropdown-content -right-4 top-20 bg-base-100 rounded-box z-[1] w-32 space-y-4 p-2 shadow">
          <Link to={"/"}>Home</Link>
          <Link to={"/brands"}>Brands</Link>
          <Link to={"/about"}>About Dev</Link>
          <Link to={"/profile"}>My Profile</Link>
          <Link to={"/auth/login"}>
            <button className="bg-green-400 px-4 py-2 rounded-lg w-full">
              Sign In
            </button>
          </Link>
          <Link to={'/auth/register'}>
            <button className="bg-purple-400 px-4 py-2 rounded-lg w-full">
              Register
            </button>
          </Link>
        </ul>
      </details>
    </>
  );
};

export default Dropdown;

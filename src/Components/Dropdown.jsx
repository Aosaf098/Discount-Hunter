import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";


const Dropdown = () => {
  return (
    <>
      <details className="dropdown">
        <summary className="btn m-1 bg-white border-none">
          <RxHamburgerMenu size={20} />
        </summary>
        <ul className="menu dropdown-content -right-4 top-20 bg-base-100 rounded-box z-[1] w-32 space-y-4 p-2 shadow">
          <li>Home</li>
          <li>Brands</li>
          <li>About Dev</li>
          <li>My Profile</li>
          <button className="bg-green-400 px-4 py-2 rounded-lg">Sign In</button>
          <button className="bg-purple-400 px-4 py-2 rounded-lg">
            Register
          </button>
        </ul>
      </details>
    </>
  );
};

export default Dropdown;

import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <>
      <div className="font-sora h-dvh">
        <Navbar />
        <div className="px-4 lg:px-0">
          <Outlet />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

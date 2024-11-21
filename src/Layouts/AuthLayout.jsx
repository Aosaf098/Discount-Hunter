import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import AuthProvider from "../Provider/AuthProvider";

const AuthLayout = () => {
  return (
    <>
      <div className="font-sora h-dvh">
        <Navbar />
        <div className="px-4 lg:px-0">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AuthLayout;

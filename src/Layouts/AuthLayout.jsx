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
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AuthLayout;

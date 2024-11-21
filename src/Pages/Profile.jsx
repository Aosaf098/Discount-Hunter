import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="font-sora">
        <Navbar />
        <div>
          <h1 className="mt-10 text-center text-4xl font-bold">User Profile</h1>
        </div>
        <div className="lg:w-1/2 mx-auto mt-14 h-[250px] rounded-xl relative px-4">
        <div className="absolute top-[100px] lg:left-[320px] left-[120px]">
            <h1 className="lg:text-4xl text-2xl font-semibold text-white">Welcome {user?.displayName}</h1>
        </div>
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://i0.wp.com/nftartwithlauren.com/wp-content/uploads/2024/01/laurenmcdonaghpereiraphoto_A_beach_sunset_with_a_horseback_ri_db01a57e-5be8-4887-9d40-80528f1d2ca4_1.png?fit=1456%2C816&ssl=1"
            alt=""
          />
          <div className="w-[150px] h-[150px] rounded-2xl absolute top-[170px] left-10 z-50">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={user?.photoURL}
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 relative">
          <h1 className="absolute lg:left-[700px] left-[200px] -top-8 text-2xl font-semibold">
            {user?.displayName}
          </h1>
          <p className="absolute lg:left-[700px] left-[200px]">{user?.email}</p>
          <Link to={`/profile/update`}>
            <button className="absolute lg:left-[1250px] left-[140px] lg:-top-6 top-20 bg-banner px-6 py-2 rounded-lg">
              Update Profile
            </button>
          </Link>
        </div>
          <Outlet />
      </div>
    </>
  );
};

export default Profile;

import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const {currentUser, forgetPassword, logOutUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleReset = (e) => {
        e.preventDefault()
        
        forgetPassword(e.target.email.value)
        .then(() => {
            toast.success('Password Reset Email Sent')
            setTimeout(() => window.location.assign('https://mail.google.com/'), 2000)
        })
        .catch((error) => {
            toast.error(error.message)
        })
    }
  return (
    <>
      <div>
        <Navbar />
        <div className="font-sora w-1/2 mx-auto mt-20">
        <h1 className="text-4xl font-medium text-center mb-10">Reset Password</h1>
        <h1 className="text-center">{currentUser?.email} </h1>
          <form onSubmit={handleReset} className="flex items-center justify-center flex-col gap-8">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <button className="bg-banner px-6 py-2 rounded-lg">Reset Password</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

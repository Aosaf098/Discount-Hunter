import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const { user, setUser, signInUser, googleSignIn, eyeOpen, handleEyeOpen, forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate()

  
  const handleLogIn = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)
    const email = form.get("email");
    const password = form.get("password");


    signInUser(email, password)
    .then(result => {
        const user = result.user
        console.log(122)
        setUser(user)
        toast.success('Signed In Successfully')
        setTimeout(() => navigate('/'), 2000)
    })
    .catch(error => {
        toast.error(error.message)
        console.log(error.code)
    })
  };

  const google = () => {
    googleSignIn()
    setTimeout(() => navigate('/'), 10000)
}

  return (
    <>
      <div className="lg:w-1/2 py-12 mx-auto my-14 bg-[#f3f3f3] rounded-xl shadow-xl">
        <form onSubmit={handleLogIn} className="card-body items-center">
          <h1 className="text-4xl mb-4">Sign In</h1>
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
          <div className="form-control lg:w-1/2 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={eyeOpen ? 'password' : 'text'}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div onClick={handleEyeOpen} className="absolute left-[88%] lg:left-[92%] top-[50px] cursor-pointer">
                {eyeOpen ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
            </div>
            <label className="label">
              <Link to={'/forgot'} className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6 w-1/2">
            <button className="btn bg-banner border-none font-bold text-black">
              Sign In
            </button>
          </div>
          <div className="my-4">
            <p>
              Don't have an account? <Link to={'/auth/register'} className="underline decoration-solid">Register</Link>
            </p>
          </div>
          OR
          <hr className="border border-solid border-black w-1/2" />
          <div className="form-control mt-6 lg:w-1/2">
            <button onClick={google} className="btn bg-banner border-none font-bold text-black flex items-center gap-3">
              <img
                className="w-7"
                src="https://img.icons8.com/?size=50&id=17904&format=png"
                alt=""
              />
              <span>Sign In with Google</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser, signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password)

    signInUser(email, password)
    .then(result => {
        const user = result.user
        console.log(user)
        setUser(user)
        navigate('/')
    })
    .catch(error => {
        console.log(error.code)
    })

  };
  return (
    <>
      <div className="w-1/2 py-12 mx-auto my-14 bg-[#f3f3f3] rounded-xl shadow-xl">
        <form onSubmit={handleLogIn} className="card-body items-center">
          <h1 className="text-4xl mb-4">Sign In</h1>
          <div className="form-control w-1/2">
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
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 w-1/2">
            <button className="btn bg-purple-400 border-none font-bold text-black">
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
          <div className="form-control mt-6 w-1/2">
            <button onClick={googleSignIn} className="btn bg-purple-400 border-none font-bold text-black flex items-center gap-3">
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

import React from "react";

const Login = () => {
  return (
    <>
      <div className="w-1/2 py-12 mx-auto mt-14 bg-[#f3f3f3] rounded-xl shadow-xl">
        <form className="card-body items-center">
          <h1 className="text-4xl mb-4">Login</h1>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
            <button className="btn bg-purple-400 border-none font-bold text-black">Login</button>
          </div>
          <div className="my-4">
            <p>Don't have an account? <span>Register</span></p>
          </div>
          OR
          <hr className="border border-solid border-black w-1/2" />
          <div className="form-control mt-6 w-1/2">
            <button className="btn bg-purple-400 border-none font-bold text-black flex items-center gap-3">
                <img className="w-7" src="https://img.icons8.com/?size=50&id=17904&format=png" alt="" />
                <span>Sign In with Google</span>
                </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

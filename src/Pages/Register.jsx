import React from "react";

const Register = () => {
  return (
    <>
      <div className="w-1/2 py-12 mx-auto mt-12 bg-[#f3f3f3] rounded-xl shadow-xl">
        <form className="card-body items-center">
          <h1 className="text-4xl mb-4">Register</h1>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="email"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="email"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
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
            <label className="label justify-start gap-3 items-center">
              <input type="checkbox" name="" id="" />
              <span className="text-sm">Accept Terms & Conditions</span>
            </label>
          </div>
          <div className="form-control mt-6 w-1/2">
            <button className="btn bg-purple-400 border-none font-bold text-black">
              Register
            </button>
          </div>
          <div className="mt-4">
            <p>
              Already have an account? <span>Log In</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

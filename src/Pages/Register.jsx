import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    createNewUser(email, password)
    .then(result => {
        const user = result.user
        console.log(user)
    })
    .catch(error => {
        console.log(error.code)
    })
  };

  return (
    <>
      <div className="w-1/2 py-5 mx-auto my-14 bg-[#f3f3f3] rounded-xl shadow-xl">
        <form onSubmit={handleRegister} className="card-body items-center">
          <h1 className="text-4xl mb-4">Register</h1>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
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
              name="photo"
              type="text"
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
          OR
          <hr className="border border-solid border-black w-1/2" />
          <div className="form-control mt-6 w-1/2">
            <button className="btn bg-purple-400 border-none font-bold text-black flex items-center gap-3">
              <img
                className="w-7"
                src="https://img.icons8.com/?size=50&id=17904&format=png"
                alt=""
              />
              <span>Sign Up with Google</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

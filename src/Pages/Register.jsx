import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { setUser, createNewUser, updateUserProfile, googleSignIn, eyeOpen, handleEyeOpen } =
    useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(12)
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        // navigate("/");
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log(displayName, photoURL);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must include at least one uppercase letter.");
    } else {
        setErrorMessage('')
    }

    if (errors.length > 0) {
      errors.forEach((error) => {
        setErrorMessage(`- ${error}`);
      });
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = e => {
    if (validatePassword(e.target.password.value)) {
        handleRegister(e)
        navigate('/')
    }
  }

  const google = () => {
    if (googleSignIn()) {
        navigate('/')
    }
  }

  return (
    <>
      <div className="w-1/2 py-5 mx-auto my-14 bg-[#f3f3f3] rounded-xl shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="card-body items-center"
        >
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
          <div className="form-control w-1/2 relative">
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
            <div onClick={handleEyeOpen} className="absolute left-[92%] top-[50px] cursor-pointer">
                {eyeOpen ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
            </div>
            {errorMessage && (
              <span className="text-red-500">{errorMessage}</span>
            )}
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
              Already have an account?{" "}
              <Link to={"/auth/login"} className="underline decoration-solid">
                Log In
              </Link>
            </p>
          </div>
          OR
          <hr className="border border-solid border-black w-1/2" />
          <div className="form-control mt-6 w-1/2">
            <button
              onClick={google}
              className="btn bg-purple-400 border-none font-bold text-black flex items-center gap-3"
            >
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

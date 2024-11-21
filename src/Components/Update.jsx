import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const Update = () => {
  const { updateUserProfile, setUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    
    
    const updatedForm = new FormData(e.target);
    const updatedName = updatedForm.get("name");
    const updatedPhoto = updatedForm.get("photo");
    updateUserProfile({
      displayName: updatedName,
      photoURL: updatedPhoto,
    })
      .then(() => {
        setUser(currentUser)
        console.log(displayName, photoURL);
        // toast.success('Profile Updated Successfully')
        setTimeout(() => navigate('/profile'), 2000)
      })
      .catch((error) => {
        console.log(error.message);
      });
    // navigate('/profile')
  };
  return (
    <>
      <div className="lg:w-1/2 mx-auto p-4 lg:mt-28 mt-12 font-sora">
        <h1 className="lg:text-4xl text-2xl text-center font-medium">Update Information</h1>
        <form onSubmit={handleUpdate} className="flex lg:gap-10 mt-8 items-center lg:flex-row flex-col">
          <div className="form-control lg:w-1/2">
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
          <div className="form-control lg:w-1/2">
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
          <div className="flex items-center justify-center mt-8">
              <button className="bg-banner px-6 py-2 rounded-lg">Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;

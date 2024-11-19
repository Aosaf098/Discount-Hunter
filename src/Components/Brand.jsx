import React from "react";
import ReactStars from "react-stars";
import 'animate.css';

const Brand = ({ brand }) => {
  const { brand_name, brand_logo, isSaleOn, description, category } = brand;
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={brand_logo}
            alt="Shoes"
            className="w-full h-64 object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-start my-2">
            <div className="badge badge-outline">{category}</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <ReactStars size={24} />
            </div>
            {isSaleOn ? (
              <div className="badge badge-secondary bg-green-500 border-none animate__animated animate__bounce animate__repeat-10">
                On Sale
              </div>
            ) : (
              <div className="badge badge-secondary bg-red-500 border-none">
                Not On Sale
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-green-400 px-4 py-2 rounded-lg hover:bg-green-500">
              View Coupon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;

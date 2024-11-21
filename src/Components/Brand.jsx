import React from "react";
import ReactStars from "react-stars";
import 'animate.css';
import { Link, useParams} from "react-router-dom";

const Brand = ({ brand }) => {

    const params = useParams()

  const { _id, brand_name, brand_logo, isSaleOn, description, category } = brand;
  return (
    <>
      <div className="card bg-base-100 lg:w-96 shadow-xl">
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
            <Link to={`/brands/${_id}`} className="bg-banner px-4 py-2 rounded-lg hover:bg-green-500">
              View Coupon
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;

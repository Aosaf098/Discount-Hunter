import React from "react";

const Brand = ({ brand }) => {
  const { brand_name, brand_logo, isSaleOn, description } = brand;
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
          <h2 className="card-title">
            {brand_name}
            {
                isSaleOn && <div className="badge badge-secondary bg-green-500 border-none">On Sale</div>
            }
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;

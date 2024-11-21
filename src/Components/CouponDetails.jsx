import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import CouponCard from "./CouponCard";

const CouponDetails = () => {
  const { _id } = useParams();
  //   console.log(params);
  const brandsData = useLoaderData();
  const id = Number(_id);
  const brand = brandsData.find((brand) => brand._id === id);
  const {
    brand_name,
    rating,
    category,
    description,
    brand_logo,
    shop_link,
    coupons,
  } = brand;
  console.log(coupons);
  return (
    <>
      <div className="font-sora">
        <nav>
          <Navbar />
        </nav>
        <div>
          <div
            className={`w-11/12 mx-auto rounded-lg mt-4 bg-green-400 flex lg:flex-row flex-col lg:px-32 px-4 items-center py-12 gap-6`}
          >
            <div className=" bg-white px-4 py-12 rounded-xl">
              <img className="lg:w-60" src={brand_logo} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-2xl font-semibold">{brand_name}</h1>
              <p className="text-xl">{description}</p>
              <p className="text-xl">
                Category: <span>{category}</span>
              </p>
              <p className="text-xl">
                Rating: <span>{rating}</span>
              </p>
            </div>
          </div>
          <div className="my-12">
            <h1 className="lg:text-4xl text-3xl text-center">Available Coupons</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 mx-auto lg:gap-12">
              {coupons.map((coupon, idx) => (
                <CouponCard key={idx} coupon={coupon} brand_logo={brand_logo} shop_link={shop_link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponDetails;

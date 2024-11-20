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
            className={`w-11/12 mx-auto rounded-lg mt-4 bg-green-400 flex px-32 items-center py-12 gap-6`}
          >
            <div className=" bg-white px-4 py-12">
              <img className="w-60" src={brand_logo} alt="" />
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
            <h1 className="text-4xl text-center">Available Coupons</h1>
            <div className="grid grid-cols-3 w-3/4 mx-auto gap-12">
              {coupons.map((coupon, idx) => (
                <CouponCard key={idx} coupon={coupon} brand_logo={brand_logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponDetails;

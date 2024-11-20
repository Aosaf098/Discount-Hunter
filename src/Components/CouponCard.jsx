import React, { useContext } from "react";
import { HomeContext } from "../Provider/HomeProvider";
import "../index.css";



const CouponCard = ({ coupon, brand_logo }) => {
  const { coupon_code, description, expiry_date, condition, coupon_type } =
    coupon;


    
  return (
    <>
      <div className="w-11/12 mx-auto my-12 flex items-center justify-center">
        <div className="card relative w-[300px] h-[350px] perspective-1000">
            <div className="card-inner absolute w-full h-full transition-transform preserve-3d">
                <div className="card-front front-back border border-solid border-slate-400 rounded-2xl flex flex-col items-center gap-12">
                    <img className="w-full h-1/2" src={brand_logo} alt="" />
                    <h1 className="text-2xl font-semibold">{coupon_code}</h1>
                </div>
                <div className="card-back front-back rounded-2xl">
                    <h2>back</h2>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CouponCard;

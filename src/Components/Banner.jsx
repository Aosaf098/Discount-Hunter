import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <>
      <div className="w-3/4 mx-auto my-12 p-6 lg:pt-12 lg:pb-60 rounded-2xl bg-[#4ade80] flex flex-col items-center justify-center relative gap-10">
        <div className="flex flex-col justify-center px-2">
          <h1 className="lg:text-6xl text-4xl font-bold text-center">
            Shop with Ease, Unlock Unprecedented Savings.
          </h1>
          <p className="text-normal text-center my-8">
            Transform your shopping experience with exclusive discounts and
            unbeatable deals <br /> that let you save more on every purchase.
          </p>
          <div className="lg:flex items-center justify-center absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 hidden">
            <Carousel />
          </div>
        </div>
        <div className="lg:hidden">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Banner;

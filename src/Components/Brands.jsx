import React, { useContext } from "react";
import { HomeContext } from "../Provider/HomeProvider";
import Brand from "./Brand";
import Navbar from "./Navbar";
import wave from "../../public/wave.svg";
import Search from "./Search";
import BrandMarquee from "./BrandMarquee";
import Marquee from "react-fast-marquee";

const Brands = () => {
  const { brands } = useContext(HomeContext);
  const { brand_logo } = brands;

  return (
    <>
      <div className="font-sora">
        <div>
          <Navbar />
        </div>
        <div
          className={`w-11/12 mx-auto rounded-lg mt-4 bg-green-400 flex flex-col items-center py-12 gap-6`}
        >
          <h2 className="text-4xl font-semibold">Brands</h2>
          <p className="text-2xl font-medium">
            Get the best vouchers in the Bangladesh
          </p>
          <div className="w-1/2 mt-4">
            <Search />
          </div>
        </div>
        <div className="w-11/12 mx-auto bg-[#f3f3f3] h-[100px] mt-4 space-x-8 flex">
          <Marquee speed={80} pauseOnHover={true} gradient={false}>
            {brands.map((brand, idx) => (
              <BrandMarquee key={idx} brand={brand} />
            ))}
          </Marquee>
        </div>

        <div className="w-11/12 mx-auto mt-10">
          <h1 className="text-5xl font-semibold text-center my-8">Brands</h1>
          <div className="grid grid-cols-3 px-44 gap-10">
            {brands.map((brand, idx) => (
              <Brand key={idx} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;

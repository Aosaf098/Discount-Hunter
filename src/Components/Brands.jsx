import React, { useContext } from "react";
import { HomeContext } from "../Provider/HomeProvider";
import Brand from "./Brand";
import Navbar from "./Navbar";
import wave from "../../public/wave.svg";
import Search from "./Search";
import BrandMarquee from "./BrandMarquee";
import Marquee from "react-fast-marquee";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "./Footer";

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
          className={`w-11/12 mx-auto rounded-lg mt-4 bg-banner flex flex-col items-center py-12 gap-6`}
        >
          <h2 className="text-4xl font-semibold">Brands</h2>
          <p className="text-2xl font-medium text-center">
            Get the best vouchers in the Bangladesh
          </p>
          <div className="lg:w-1/2 mt-4">
            <Search />
          </div>
        </div>
        <div className="w-11/12 mx-auto h-[100px] mt-4 space-x-8 flex">
          <Marquee speed={80} pauseOnHover={true} gradient={false}>
            {brands.map((brand, idx) => (
              <BrandMarquee key={idx} brand={brand} />
            ))}
          </Marquee>
        </div>

        <div className="lg:w-11/12 mx-auto mt-10">
          <h1 className="text-5xl font-semibold text-center my-8">Brands</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-44 px-4 gap-10">
            {brands.map((brand, idx) => (
              <Brand key={idx} brand={brand} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Brands;

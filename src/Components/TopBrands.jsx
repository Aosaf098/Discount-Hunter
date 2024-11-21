import React, { useContext } from "react";
import { HomeContext } from "../Provider/HomeProvider";
import Marquee from "react-fast-marquee";
import BrandMarquee from "./BrandMarquee";

const TopBrands = () => {
  const { brands } = useContext(HomeContext);
  const { shop_link } = brands;
  return (
    <>
      <div className="lg:mt-64 space-y-12">
        <h1 className="text-4xl text-center">Top Brands</h1>
        <p className="text-center font-medium mx-auto">Go into carefree and make astounding savings at Daraz, Evaly, Peekaboo, Pathao and others. Get your grocery, electronics, footwear  <br /> and everything available in online. Save biggest with promo codes, coupons and vouchers.</p>
        <div className="w-11/12 mx-auto h-[100px] mt-4 space-x-8 flex">
          <Marquee speed={80} pauseOnHover={true} gradient={false}>
            {brands.map((brand, idx) => (
              <BrandMarquee key={idx} brand={brand} />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default TopBrands;

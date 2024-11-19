import React, { useContext } from "react";
import { HomeContext } from "../Provider/HomeProvider";
import SaleCard from "./SaleCard";

const OnSale = () => {
  const { brands } = useContext(HomeContext);
  const { isSaleOn } = brands;

  return (
    <>
      <div className="my-10">
        <h1 className="text-center mx-auto text-4xl">Sale Offers</h1>
        <div className="w-4/5 mx-auto mt-10 grid grid-cols-3 px-20 gap-12">
            {
                brands.map((brand, idx) => <SaleCard key={idx} brand={brand} />)
            }
        </div>
      </div>
    </>
  );
};

export default OnSale;

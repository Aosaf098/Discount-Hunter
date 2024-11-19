import React, { createContext, useEffect, useState } from "react";

export const HomeContext = new createContext();

const HomeProvider = ({ children }) => {

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("coupon.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const homeInfo = {
    brands,
  };
  return (
    <>
      <HomeContext.Provider value={homeInfo}>{children}</HomeContext.Provider>
    </>
  );
};

export default HomeProvider;

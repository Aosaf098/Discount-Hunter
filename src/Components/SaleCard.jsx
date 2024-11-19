import React from "react";

const SaleCard = ({ brand }) => {
  const { brand_logo, isSaleOn, brand_name, coupons } = brand;
  return (
    <>
      {isSaleOn && (
        <div className="card shadow-xl bg-base-100">
          <figure>
            <img
              src={brand_logo}
              alt="Shoes"
              className="w-full h-48 object-contain"
            />
          </figure>
          <div className="card-body items-center gap-8">
            <h2 className="card-title">{brand_name}</h2>
            {coupons.map((coupon, idx) => (
              <p key={idx}>{coupon.description}</p>
            ))}
            <div className="flex justify-around gap-20">
              {coupons.map((coupon, idx) => (
                <span
                  key={idx}
                  className="bg-purple-400 text-center rounded-full badge badge-secondary border-none"
                >
                  {coupon.coupon_code}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SaleCard;

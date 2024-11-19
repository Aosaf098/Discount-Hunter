import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="carousel rounded-box w-full">
        <div className="carousel-item w-full">
          <img
            src="https://img.lazcdn.com/us/domino/d96d0e6a-ea1c-47a0-9f0c-9b38211ebdf4_BD-1976-688.jpg_2200x2200q80.jpg"
            className="w-full hidden lg:block"
            alt="Tailwind CSS Carousel component"
          />
          <img
            src="https://img.freepik.com/free-vector/back-friday-sales-background-watercolor-style_23-2147954630.jpg?t=st=1731979465~exp=1731983065~hmac=8ec41a30984206b9ee824ef6fd76eeca0036bc106551925bc72f175c70fc52c1&w=826"
            className="w-full lg:hidden"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.lazcdn.com/us/domino/dc428663-7e7c-48ad-b528-a76b69a0234d_BD-1976-688.jpg_2200x2200q80.jpg"
            className="w-full hidden lg:block"
            alt="Tailwind CSS Carousel component"
          />
           <img
            src="https://img.freepik.com/free-vector/abstract-special-offer-promotion-banner_23-2148328148.jpg?t=st=1731979554~exp=1731983154~hmac=98b60bd9f6980f17109360c32c35d964cf4ee2204051db19a49cb9d2683dc61e&w=826"
            className="w-full lg:hidden"
            alt="Tailwind CSS Carousel component"
          />"
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://img.lazcdn.com/us/domino/200e9086-b226-4623-98c7-660fce5d390c_BD-1976-688.jpg_2200x2200q80.jpg"
            className="w-full hidden lg:block"
            alt="Tailwind CSS Carousel component"
          />
           <img
            src="https://img.freepik.com/free-vector/colorful-sales-with-geometric-shapes_23-2147701431.jpg?t=st=1731979677~exp=1731983277~hmac=971586c35828c2e3f417a6e75f1f6670053154caded0cc0f511febeff2e69104&w=826"
            className="w-full lg:hidden"
            alt="Tailwind CSS Carousel component"
          />"
        </div>
      </div>
    </>
  );
};

export default Carousel;

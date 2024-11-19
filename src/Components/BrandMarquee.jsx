import Marquee from "react-fast-marquee";

const BrandMarquee = ({ brand }) => {
  const { brand_logo } = brand;
  return (
    <>
      <div className="w-16 mx-12">
        <img className="w-full" src={brand_logo} alt="" />
      </div>
    </>
  );
};

export default BrandMarquee;

{
  /* <div className="w-20 aspect-square mx-10">
          
        </div> */
}

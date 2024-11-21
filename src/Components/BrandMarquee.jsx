import { Link } from "react-router-dom";

const BrandMarquee = ({ brand }) => {
  const { brand_logo, _id } = brand;
  return (
    <>
      <div className="w-24 mx-12">
        <Link to={`/brands/${_id}`}><img className="w-full" src={brand_logo} alt="" /></Link>
      </div>
    </>
  );
};

export default BrandMarquee;


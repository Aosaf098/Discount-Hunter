import "../index.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PiCopySimpleDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CouponCard = ({ coupon, brand_logo, shop_link }) => {
  const { coupon_code, description, expiry_date, condition, coupon_type } =
    coupon;

    const handleToast = () => {
        toast.success('Copied to the Clipboard')
    }
  return (
    <>
      <div className="w-11/12 mx-auto my-12 flex items-center justify-center">
        <div className="card-1">
          <div className="card-inner">
            <div className="card-front front-back border border-solid border-slate-400 rounded-2xl flex flex-col items-center">
              <img
                className="w-full h-1/2 p-3 border-b-2 border-solid border-slate-400"
                src={brand_logo}
                alt=""
              />
              <div className="w-full p-4 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">{coupon_code}</h1>
                <p>{description}</p>
              </div>
            </div>
            <div className="card-back front-back rounded-2xl">
              <div className="px-4 py-8 flex flex-col gap-6">
                <CopyToClipboard text={coupon_code}>
                  <div className="flex justify-between gap-4 pr-4">
                    <h1 className="text-2xl font-semibold">{coupon_code}</h1>
                    <button onClick={handleToast}><PiCopySimpleDuotone size={24} /></button>
                  </div>
                </CopyToClipboard>
                <p className="text-xl font-semibold">{description}</p>
                <p className="text-xl font-semibold">{condition}</p>
                <span>Type: {coupon_type}</span>
                <span className="bg-red-500 rounded-full p-2 text-sm text-center">
                  Expiry Date: {expiry_date}
                </span>
                <Link to={shop_link} className="bg-green-400 px-6 py-2 rounded-lg w-1/2 text-center mx-auto">
                  Use Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponCard;

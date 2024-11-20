import Navbar from "../Components/Navbar";
// import Banner from "../Components/Banner";
// import TopBrands from "../Components/TopBrands";
// import OnSale from "../Components/OnSale";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="font-sora">
        <header>
          <Navbar />
        </header>
        <menu>
          <Outlet />
          {/* <Banner />
          <TopBrands />
          <OnSale /> */}
        </menu>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default HomeLayout;

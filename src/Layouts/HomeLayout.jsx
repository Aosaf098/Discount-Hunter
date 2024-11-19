import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import BrandMarquee from '../Components/BrandMarquee'
import Brands from '../Components/Brands'
import TopBrands from '../Components/TopBrands'
import OnSale from '../Components/OnSale'

const HomeLayout = () => {


  return (
    <>
    <div className='font-sora'>
        <header>
            <Navbar />
        </header>
        <menu>
            <Banner />
            {/* <BrandMarquee /> */}
            {/* <Brands /> */}
            <TopBrands />
            <OnSale />
        </menu>
    </div>
    </>
  )
}

export default HomeLayout

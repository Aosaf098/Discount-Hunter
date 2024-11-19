import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import BrandMarquee from '../Components/BrandMarquee'
import Brands from '../Components/Brands'

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
        </menu>
    </div>
    </>
  )
}

export default HomeLayout

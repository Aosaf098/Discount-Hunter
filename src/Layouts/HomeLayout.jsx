import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import BrandMarquee from '../Components/BrandMarquee'

const HomeLayout = () => {
  return (
    <>
    <div className='font-sora'>
        <header>
            <Navbar />
        </header>
        <menu>
            <Banner />
            <BrandMarquee />
        </menu>
    </div>
    </>
  )
}

export default HomeLayout

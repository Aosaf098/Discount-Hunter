import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'

const HomeLayout = () => {
  return (
    <>
    <div className='font-sora'>
        <header>
            <Navbar />
        </header>
        <menu>
            <Banner />
        </menu>
    </div>
    </>
  )
}

export default HomeLayout

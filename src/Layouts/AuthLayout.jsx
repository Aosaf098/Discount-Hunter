import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
        <div className='font-sora h-dvh'>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default AuthLayout

import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const error = useRouteError()
    console.log(error)

  return (
    <>
        <div className='flex flex-col items-center justify-center py-10 m-auto gap-10'>
            <img src="https://img.icons8.com/?size=80&id=ytpYJAJuc8ju&format=png" alt="" />
            <h1 className='font-sora font-bold text-center text-6xl'>Oops</h1>
            <p className='font-sora font-medium'>Sorry, an unexpected eror has occured</p>
            <p className='flex gap-2 items-center font-sora font-bold text-2xl'>
                <i>{error.status}</i>
                <i className='font-sora font-bold text-2xl'>{error.statusText || error.message}</i>
            </p>
        </div>
    </>
  )
}

export default Error
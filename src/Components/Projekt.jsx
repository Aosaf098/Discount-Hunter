import React, { useEffect, useState } from 'react'
import FeaturedWork from './FeaturedWork'

const Projekt = () => {

    const [projekts, setProjekts] = useState([])

    useEffect(() => {
        fetch('Projekts.json')
        .then((res) => res.json())
        .then((data) => setProjekts(data))
    }, [])
    console.log(projekts)

  return (
    <>
        <div className='w-3/4 mx-auto my-8 flex flex-col items-center gap-4 justify-center lg:p-4 '>
            <h1 className='text-4xl'>Featured Work</h1>
            <div className='mt-8 lg:w-1/2 mx-auto grid lg:grid-cols-2 lg:gap-4 gap-10'>
                {
                    projekts.map(projekt => <FeaturedWork key={projekt.id} projekt={projekt} />)
                }
            </div>
        </div>
    </>
  )
}

export default Projekt

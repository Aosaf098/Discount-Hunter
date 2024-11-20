import React from 'react'

const FeaturedWork = ({projekt}) => {

    const {project_name, project_img, description, technologies} = projekt
  return (
    <>
        <div className='h-[400px] rounded-xl bg-[#f3f3f3] p-4'>
            {/* <div className='w-full h-full p-4 '>
                
            </div> */}
            <div className="card-1 shadow-2xl rounded-xl">
                <div className="card-inner">
                    <div className="front-back rounded-xl">
                        <img className='w-full h-full object-cover' src={project_img} alt="" />
                    </div>
                    <div className="card-back front-back rounded-xl p-4 space-y-8">
                        <h1 className='text-4xl'>{project_name}</h1>
                        <p>{description}</p>
                        
                        <ul>
                        <span className='text-2xl mb-2'>Technologies Used: </span>
                            {
                                technologies.map((technology, idx) => <li className='spece-y-2 text-xl mt-2' key={idx}>{technology}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FeaturedWork

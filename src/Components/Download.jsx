import React from 'react'

const Download = () => {
  return (
    <>
        <div className='my-10 py-8 bg-green-400 flex items-center justify-center gap-10'>
            <div>
                <img src="https://htmlbeans.com/html/coupon/images/img16.png" alt="" />
            </div>
            <div className='w-1/4 space-y-8'>
                <h1 className='text-4xl font-semibold text-[#f2f2f2]'>Download our Discount Hunter App Now!</h1>
                <p className='text-justify text-[#f2f2f2]'>Save big on the go with the Discount Hunter app! Get the latest coupons, promo codes, and deals delivered straight to your phone. Browse, save, and redeem discounts effortlessly. Download now and start shopping smarter today!</p>
                <div className='flex justify-evenly'>
                    <button className='bg-black px-4 rounded-lg py-2 flex items-center gap-2'>
                        <img className='w-8' src="https://img.icons8.com/?size=48&id=L1ws9zn2uD01&format=png" alt="" />
                        <h3 className='text-white'>Play Store</h3>
                    </button>
                    <button className='bg-black px-4 rounded-lg py-2 flex items-center gap-2'>
                        <img className='w-8' src="https://img.icons8.com/?size=64&id=jbsjruPQ2EJI&format=png" alt="" />
                        <h3 className='text-white'>App Store</h3>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Download

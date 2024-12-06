import Image from 'next/image'
import React from 'react'

export default function CardDelivery() {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
    <div className=' '>
  <span className=' text-linear font-bold'>01</span>
  <div className=' bg-bgGrey p-[2rem] rounded-tl-rounded rounded-br-rounded h-[12rem]'>
  <div className=' flex items-center gap-[.5rem]'>
  <Image alt='..' src='/Group.png' width={35} height={35}/>
          <h1 className=' text-grey font-semibold'>Delivery</h1>  
  </div>
      <div className=' ms-[3rem]'>
          <p className='  gap-[.5rem] text-secondary text-sm'>Within the Moscow Ring Road — <span className=' text-grey font-semibold'>350 $.</span></p>
          <p className=' gap-[.5rem] text-secondary text-sm'>Outside the Moscow Ring Road —  <span className=' text-grey font-semibold'>350 $+ 25 $/km.</span></p>
          <p className='  gap-[.5rem] text-secondary text-sm'>We deliver to Mytishchi and Korolev for free, minimum order amount is .<span className=' text-grey font-semibold'>1000$</span></p>
          </div>
    </div>
  </div>
    <div className=''>
  <span className=' text-linear font-bold'>02</span>
  <div className=' bg-bgGrey p-[2rem] rounded-tl-rounded rounded-br-rounded h-[12rem]'>
  <div className=' flex items-center gap-[.5rem]'>
  <Image alt='..' src='/sedan 1.png' width={35} height={35}/>
          <h1 className=' text-grey font-semibold'>Pickup</h1>  
  </div>
      <div className=' ms-[3rem]'>
          <p className='  gap-[.5rem] text-secondary text-sm'>You can pick up the product you need at our office -<span className=' text-grey font-semibold'>free of charge</span></p>
          </div>
    </div>
  </div>
    <div className=''>
  <span className=' text-linear font-bold'>03</span>
  <div className=' bg-bgGrey p-[2rem] rounded-tl-rounded rounded-br-rounded h-[12rem]'>
  <div className=' flex items-center gap-[.5rem]'>
  <Image alt='..' src='/icon2.png' width={35} height={35}/>
          <h1 className=' text-grey font-semibold'>All over the world</h1>  
  </div>
      <div className=' ms-[3rem]'>
          <p className='  gap-[.5rem] text-secondary text-sm'>Delivery is carried out through a transport company of the client's choice; the goods are shipped within <span className=' text-grey font-semibold'>15 minutes.</span></p>
          </div>
    </div>
  </div>
  </div>  )
}

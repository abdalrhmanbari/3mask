import React from 'react'
import Map from '../../Components/Component/map'

export default function Contact() {
  return (
    <div className='sm:mt-marginT mt-[2rem]'>
      <h1 className='text-4xl md:text-5xl font-semibold text-center mb-[6rem]'>Contact details</h1>
        <div className=' flex  gap-[4rem] justify-center flex-wrap'>
          <div>
          <h1 className=' flex gap-[0.5rem] items-center '><img alt='..' src='/placeholder 1.png'/><span className=' text-base font-semibold'>Our address</span></h1>
          <p className=' ms-6 text-secondary text-sm'>Syria, Damascus</p>
          </div>
          <div>
          <h1 className=' flex gap-[0.5rem] items-center '><img alt='..' src='/icon.png'/><span className=' text-base font-semibold'>Our phone</span></h1>
          <p className=' ms-6 text-secondary text-sm'>+963939176488</p>
          </div>
          <div>
          <h1 className=' flex gap-[0.5rem] items-center '><img alt='..' src='/icon (1).png'/><span className=' text-base font-semibold'>Working hours</span></h1>
          <p className=' ms-6 text-secondary text-sm'>Daily from 10:00 to 20:00</p>
          </div>
        </div>
            <Map/>
    </div>
  )
}

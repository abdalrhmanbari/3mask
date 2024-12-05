import React from 'react'
import Input from '../Input/input'

export default function Map() {
  return (
    <div className='  '>
    <div className=' md:absolute  sm:mt-[6rem] mt-[3rem] sm:ms-[4rem] bg-bgWhite shadow-lg shadow-blue-500/50  rounded-tl-rounded rounded-br-rounded'>
      <div className=' flex justify-center items-center text-center flex-col sm:px-[6rem] sm:py-[4rem] p-[1rem] '>
      <h1 className=' text-xl font-bold  '>Order a call</h1>
      <p className=' text-grey'>Right now</p>
      <div>
      <div className=' flex flex-col justify-center items-center gap-[2rem] mt-[2rem]'>
      <Input img="/user 1.png" name='name' type='text' id='name' placeholder='Your Name' />
      <Input img="/phone (4) 1.png" name='phone' type='tel' id='phone' placeholder='Your Phone' />
</div>            </div>
      </div>
    </div>
    <div className=' mt-[6rem]   w-full   object-cover '>
      <img alt='..' src='/map.jpeg' className=' w-full '/>
    </div>
  </div>  )
}

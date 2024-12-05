import React from 'react'

export default function Footer() {
  return (
    <div className=' mt-[4rem] flex justify-between bg-bgGrey w-full py-[4rem] px-[2rem] '>
      <div className=' flex flex-col gap-[1.5rem]'>
        <h1 className=' font-semibold text-lg'>CONTACTS</h1>
      <div className=' flex flex-col gap-[.5rem] '>
        <h1 className=' font-semibold flex gap-[0.5rem] items-center'> <span><img alt='..' src='/placeholder 1001.png'/> </span>Our address</h1>
        <p className=' text-sm text-secondary ms-[1rem]'>Syria, Damascus</p>
      </div>
      <div className=' flex flex-col gap-[.5rem] '>
        <h1 className=' font-semibold flex gap-[0.5rem] items-center'> <span><img alt='..' src='/phone (4) 1.png'/> </span>Our phone</h1>
        <p className=' text-sm text-secondary ms-[1rem]'>+963939176488</p>
      </div>
      <div className=' flex flex-col gap-[.5rem] '>
        <h1 className=' font-semibold flex gap-[0.5rem] items-center'> <span><img alt='..' src='/Group00.png'/> </span>Our mail</h1>
        <p className=' text-sm text-secondary ms-[1rem]'>bariabdalrhman@gmail.com</p>
      </div>
      <div className=' cursor-pointer'>
        <img alt='..' src='/payments-min 1.png'/>
      </div>
      </div>
      <div className=' flex flex-col gap-[.5rem]'>
        <h1 className='font-semibold text-lg'>ABOUT THE STORE</h1>
        <p className='text-sm text-secondary sm:w-[15rem] flex flex-col'>A specialized store of certified, original protective materials for respiratory organs and protection against <span className=' text-linear'>the COVID-19 virus</span></p>
      </div>
      <div>
        <img alt='..' src='/e67ffe8f2f44cef3bd7cf541a4d0e9ee.png'/>
      </div>
    </div>
  )
}

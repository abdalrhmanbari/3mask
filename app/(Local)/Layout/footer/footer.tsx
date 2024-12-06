import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className=' mt-[4rem]  flex justify-between flex-wrap gap-[4rem] bg-bgGrey w-full py-[4rem] px-[2rem] '>
      <div className=' flex flex-col gap-[1.5rem]'>
        <h1 className=' font-semibold text-lg'>CONTACTS</h1>
      <div className=' flex flex-col gap-[.5rem] '>
        <h1 className=' font-semibold flex gap-[0.5rem] items-center'> <span>
          <Image alt='..' src='/placeholder 1001.png' width={20} height={20}  />
          </span>Our address</h1>
        <p className=' text-sm text-secondary ms-[1rem]'>Syria, Damascus</p>
      </div>
      <div className=' flex flex-col gap-[.5rem] '>
        <h1 className=' font-semibold flex gap-[0.5rem] items-center'> <span>
          <Image alt='..' src='/phone (4) 1.png' width={20} height={20}  />
          </span>Our phone</h1>

        <p className=' text-sm text-secondary ms-[1rem]'>+963939176488</p>
      </div>
      <div className=' flex flex-col gap-[.5rem] '>
        <h1 className=' font-semibold flex gap-[0.5rem] items-center'> <span>
          <Image alt='..' src='/Group00.png' width={20} height={20}  />
          </span>Our mail</h1>
        <p className=' text-sm text-secondary ms-[1rem]'>bariabdalrhman@gmail.com</p>
      </div>
      <div className=' cursor-pointer'>

          <Image alt='..' src='/payments-min 1.png' width={300} height={20}  />
      </div>
      </div>
      <div className=' flex flex-col gap-[.5rem]'>
        <h1 className='font-semibold text-lg'>ABOUT THE STORE</h1>
        <p className='text-sm text-secondary sm:w-[15rem] flex flex-col'>A specialized store of certified, original protective materials for respiratory organs and protection against <span className=' text-linear'>the COVID-19 virus</span></p>
      </div>
      <div>
          <Image alt='..' src='/e67ffe8f2f44cef3bd7cf541a4d0e9ee.png' width={150} height={150}  />
      </div>
    </div>
  )
}

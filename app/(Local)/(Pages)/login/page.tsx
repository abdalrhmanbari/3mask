"use client"
import React from 'react'
import { member } from '../../Types/types';
import Input from '../../Components/Input/input';
import Image from 'next/image';
export default function LogIn() {
  const classOut="flex flex-col gap-[0.5rem] w-[20rem]"
  const classError= " text-red-600 text-sm  flex items-start"
  const classField="block min-w-0 grow py-2 pl-2 pr-3 text-base text-gray-900 bg-bgGrey placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6   "
  // const classDiv= "flex items-center rounded-xl bg-bgGrey pl-3 outline outline-1 -outline-offset-1 outline-gray-100 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600  "
  return (

        <div className=" flex items-center justify-center  my-[6rem] flex-col ">
            <div className=' flex flex-col gap-6'>
          <div className=' flex flex-col justify-center items-center text-center gap-2'>
            <h1 className=' sm:text-5xl  text-2xl font-bold'>Welcome to <span className=' text-primary'>3M</span>ASK</h1>
            <h2 className=' text-sm sm:text-base text-gray-500 w-[30rem]'>A specialized store of certified, original protective materials for respiratory organs and protection against
            the COVID-19 virus</h2>
      </div>
        <div className="flex flex-col items-center justify-center gap-[1rem]  m-auto">
        <div className={classOut}>
        <div className="">
          <Input src={"/user 1.png"} name='name' type='text' id='name' placeholder='Your Name' />
        </div>
        </div>
        
        <div className={classOut}>

<div className="">
          <Input src={"/Group00.png"} name='email' type='email' id='email' placeholder='Your Email' />
</div>
</div>

        <div className={classOut}>
        <div className="">
          <Input src={"/user 1.png"} name='password' type='password' id='password' placeholder='Your Password' />
        </div>
        </div>
        <div className={classOut}>

        <div className="">
          
          <Input src={"/phone (4) 1.png"} name='phone' type='tel' id='phone' placeholder='Your Phone' />
        </div>
        </div>
        <button type="submit" className= " capitalize bg-primary ease-linear rounded-full w-full  text-white mt-10 hover:bg-white hover:text-primary duration-300 font-bold  relative justify-center items-center py-3  outline-none ">
            log in
          </button>
        </div>
            </div>
        </div>

  )
}

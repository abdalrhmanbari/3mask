"use client"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from "yup";
import { member } from '../../Types/types';
import Input from '../../Components/Input/input';
import Image from 'next/image';
export default function LogIn() {
  const classOut="flex flex-col gap-[0.5rem] w-[20rem]"
  const classError= " text-red-600 text-sm  flex items-start"
  const classField="block min-w-0 grow py-2 pl-2 pr-3 text-base text-gray-900 bg-bgGrey placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6   "
  const classDiv= "flex items-center rounded-xl bg-bgGrey pl-3 outline outline-1 -outline-offset-1 outline-gray-100 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600  "
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
        <div className={classDiv}>
          <Image width={20} height={20} alt='..' src={"/user 1.png"}/>
          <Field id="name" name="name" type="text" className={classField } placeholder="Your name"/>
        </div>
          <span className={classError}><ErrorMessage name="name" /></span>
        </div>
        
        <div className={classOut}>

<div className={classDiv}>
  <Image width={20} height={20} alt='..' src={"/Group00.png"}/>
  <Field id="email" name="email" type="email" className={classField } placeholder="Email"/>
</div>
  <span className={classError}><ErrorMessage name="email"/></span>
</div>

        <div className={classOut}>
        <div className={classDiv}>
          <Image width={20} height={20} alt='..' src={"/user 1.png"}/>
          <Field id="password" name="password" type="password" className={classField } placeholder="Your Password" />
        </div>
          <span className={classError}><ErrorMessage name="password"/></span>
        </div>
        <div className={classOut}>

        <div className={classDiv}>
          
          <Image width={20} height={20} alt='..' src={"/phone (4) 1.png"}/>
          <Field id="phone" name="phone" type="tel" className={classField } placeholder="Your Phone" />
        </div>
          <span className={classError}><ErrorMessage name="phone"/></span>
        </div>
        <button type="submit" className= " capitalize bg-primary ease-linear rounded-full w-full  text-white mt-10 hover:bg-white hover:text-primary duration-300 font-bold  relative justify-center items-center py-3  outline-none ">
            log in
          </button>
        </div>
            </div>
        </div>

  )
}

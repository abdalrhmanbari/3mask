import React from 'react'
import Button from '../../Components/Button/button'
import CardWholesale from '../../Components/Card/card-wholesale'
import Input from '../../Components/Input/input'
import Catalog from '../../Components/Component/catalog'
import Link from 'next/link'

export default function Wholesale() {
  return (
    <div className=' pb-[2rem] mt-marginT'>
        <div className=' flex  flex-col sm:flex-row justify-between mb-[10rem]'>
        <div className=' flex flex-col gap-[2rem]'>
        <h1 className=' text-5xl md:text-6xl font-semibold'>Respirators wholesale
        with discount up to 50%
        </h1>
        <p className=' text-pattern'>And delivery on the day of order.</p>
        <Link href={"/catalog"}>
        <Button title='Go To Catalog' style='bg-linear text-white'/>
        </Link>
        </div>
    <div className=' hidden sm:block w-[30rem] mt-[4rem] me-[2rem]'>
        <img alt='..' src='/Group 57.png'/>
    </div>
    <div className='w-full  md:min-w-[45%] md:max-w-[45%] md:mt-0 mt-[3rem]   m-auto'>
        <img src='/c343c4c63ddd5623074f3e247601ef9f.jpeg' alt='...' className=' block w-full h-full  rounded-bl-[4rem] rounded-tr-[4rem]'/>
    </div>
    </div>
            <div className=' bg-bgGrey py-paddingY flex flex-col gap-[1rem]'>
                <h1 className='text-2xl sm:text-3xl  font-semibold text-center sm:w-[30rem] m-auto'>Specialized protective respirators for respiratory protection</h1>
                <p className=' text-grey m-auto text-center'>Specialized protective respirators for respiratory protection</p>
                <div className=' flex flex-wrap justify-between gap-[2rem]  mt-[2rem] px-paddingX'>
                <CardWholesale img='/icon (1)1.png' title='Always in stock' disc='Our own warehouse guarantees the availability of products and pick-up for our customers'/>
                <CardWholesale img='/icon (1)1.png' title='Payment by bank transfer' disc='You pay for all ordered goods through the bank and receive a consignment note TORG 12'/>
                <CardWholesale img='/icon (1)1.png' title='Original products' disc='Each product has a certificate of conformity'/>
                </div>
            </div>
            <div className=' flex flex-col gap-[1rem] py-paddingY sm:w-[50rem] m-auto'>
                <h1 className='text-2xl sm:text-3xl  font-semibold text-center sm:w-[30rem] m-auto'>Fill out the form</h1>
                <p className='text-grey m-auto text-center sm:w-[30rem]'>For wholesale and small wholesale orders or place an order through the shopping cart.Deliveries are possible both individually and in batches with individual volume discounts.</p>
                <div className=' flex flex-col gap-[2rem] mt-[2rem]'>

                <div className=' grid sm:grid-cols-2 grid-cols-1 gap-[2rem]'>
                    <Input img='/user 1.png' type='text' name='name' placeholder='Your name' id='name'/>
                    <Input img='/Group00.png' type='email' name='email' placeholder='Email' id='email'/>
                    <Input img='/phone (4) 1.png' type='tel' name='phone' placeholder='Your phone' id='phone'/>
                    <Input img='/placeholder 100.png' type='text' name='address' placeholder='Delivery address' id='address'/>
                </div>
                    <Input img='/list 1.png' type='text' name='list' placeholder='List the mask models and the quantity you are interested in. For example: 8122 - 300 pcs.' id='list'/>
                    <Button title="Send" style='bg-linear text-white'/>
                </div>
            </div>
            <Catalog title='Discount up to 50%' disc='for bulk purchases'/>
        </div>
  )
}

import Button from '@/app/(Local)/Components/Button/button'
import CardFamous from '@/app/(Local)/Components/Card/card-famous'
import CartFamous from '@/app/(Local)/Components/Card/cart-famous'
import Link from 'next/link'
import React from 'react'

export default function Famous() {
  return (
    <div className='  py-paddingY '>
      <div className=' flex justify-center items-center  flex-col py-[2rem] gap-[1rem] '>
        <h1 className=' text-2xl sm:text-3xl  font-semibold '>Famous bloggers about us</h1>
        <p className=' text-pattern'>They only say good things about us</p>
      </div>
      <div className='bg-bgGrey px-paddingX'>
      <div className=' flex md:flex-row flex-col-reverse justify-between items-center gap-[2rem] '>
        <div className=' flex flex-col gap-[1rem]'>
      <CardFamous title={'Protection from dust and germs'} disc={'The foldable 3-panel design ensures a secure fit of the 3M respirator for a variety of face types and shapes, the mask adapts to facial movements and is resistant to wrinkling.'}/>
      <CardFamous title={'Made in Great Britain (UK)'} disc={'Highest quality products from a world-famous brand.'}/>
      <CardFamous title={'FFP2 and FFP3'} disc={'Our respirators have valves with the highest levels of protection. Purification of inhaled air up to 99%.'}/>
        </div>
      <img alt='..' src='/ffb2.png'/>
      </div>
      <div className=' flex  flex-col md:flex-row justify-between items-center gap-[2rem]'>
      <img alt='..' src='/ffb2(1).png'/>
        <div className=' flex flex-col gap-[1rem]'>
      <CardFamous title={'Work under contract'} disc={'We conclude an agreement for the supply of products to institutions in need.'}/>
      <CardFamous title={'Always in stock'} disc={'Our own warehouse guarantees product availability and pick-up for our customers.'}/>
      <CardFamous title={'We organize delivery'} disc={'You can place a preliminary order for the desired product name and quantity, and we will arrange delivery.'}/>
        </div>
      </div>
      </div>
      <div className=' flex flex-col sm:flex-row gap-[1rem] justify-between items-center mt-[2rem]'>
        <div className=' flex flex-col gap-[1rem]'>
        <div className=' flex flex-col gap-[.8rem]'>
          <h1 className=' text-grey font-semibold text-2xl'>Large and small wholesale</h1>
          <span className=' text-grey '>Best price guarantee</span>
        </div>
        <p className=' lg:w-[40rem] text-secondary text-sm'>Check out the <span className=' text-linear'> Commercial offer of 3MASKI.</span> We are a direct importer. We will provide the best prices for any volume, and we also work with VAT and without VAT. To negotiate discounts, contact our managers
        </p>
        <div className=' mt-[1rem]'>
          <Link href={"/login"}>
        <Button title='Order' style='bg-linear text-white'/>
          </Link>
        </div>
        </div>
        <div className=' sm:min-w-[18rem] lg:w-[30rem]   '>
          <img alt='..' src='/c343c4c63ddd5623074f3e247601ef9f.jpeg' className=' w-full rounded-tl-[4rem] rounded-br-[4rem]'/>
        </div>
      </div>
      <div>
        <div className=' py-paddingY sm:w-[30rem] flex justify-center items-center flex-col m-auto text-center'>
          <h1 className='sm:text-3xl text-2xl font-bold'>Contactless delivery
          with payment upon receipt</h1>
          <p className='mt-[.8rem] text-pattern'>Simple and convenient</p>
        </div>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem]'>
          <CartFamous count={1} title='Order via the website or by phone' disc='Add the product you need to your cart or place an order by calling the hotline'/>
          <CartFamous count={2} title='Order processing' disc='The manager processes the application within 5 minutes, contacts you to confirm the order and specifies the exact quantity, delivery time and address'/>
          <CartFamous count={3} title='The cost of delivery by courier within the Moscow Ring Road is 350 rubles.' disc='Delivery on the day of order in Moscow and the region, we send via SDEK TP within 30 minutes you receive a tracking number.'/>
          <CartFamous count={4} title='Receipt and payment' disc='The courier delivers the order in an individually packed courier package.'/>
        </div>
        <div className=' flex items-center justify-center mt-[3rem]'>
          <Link href={"login"}>
        <Button title='Order' style='bg-linear text-white'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

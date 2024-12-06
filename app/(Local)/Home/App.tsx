import React from 'react'
import CardHome from '../Components/Card/card-home'
import Catalog from '../Components/Component/catalog'
import Famous from '../Components/Component/famous'
import Image from 'next/image'
import Imag from '../Components/Image/imag'

export default function App() {
  return (
    <>
    <div className=' bg-[#FFFFFF] pb-[2rem] mt-marginT '>
        <div className=' flex  justify-between flex-col md:flex-row  gap-[4rem]'>
            <div className=''>
                <div className=' flex flex-col gap-[2rem]'>
                    <h1 className='text-5xl md:text-7xl flex flex-col font-semibold text-grey '>Certified
                        <span>
                    Respirator Masks
                        </span>
                    </h1>
                    <p className='text-base sm:text-xl text-secondary'>
                    In stock with delivery in 2 hours and payment upon receipt
                    </p>
                </div>
                <div className=' sm:mb-0 mb-4   mt-[2rem] grid  sm:grid-cols-2  grid-cols-1  gap-[3rem] '>
                <CardHome title='Pickup and shipment' disc='Having a brand store, we provide the opportunity to carry out self-pickup.' icon='/Group.png'/>
                <CardHome title='Best prices, wholesale sales' disc='We are a direct importer and manufacturer.' icon='/coins 1.png'/>
                <CardHome title='Original products' disc='Each respirator has a certificate of conformity, which proves the originality of the product.' icon='/facemask virus covid19 corona mask.png'/>
                <CardHome title='Protection up to 99%' disc='Respirators are used both for protection against COVID-19 and for industrial and construction purposes.' icon='/Group (1).png'/>
                </div>
            </div>
            <div className=' w-full  md:min-w-[45%] md:max-w-[45%]    m-auto'>
                <Imag src={"/mask-home.jpeg"}/>
                </div>
        </div>
    </div>
    <Catalog title="Catalog in stock"/>
    <Famous/>
    </>

  )
}

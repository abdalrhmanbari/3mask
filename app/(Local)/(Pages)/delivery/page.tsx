import React from 'react'
import CardDelivery from '../../Components/Card/card-delivery'
import map from "../../../../public/map.jpeg"
import Input from '../../Components/Input/input'
import Map from '../../Components/Component/map'
export default function Delivery() {
  return (
    <div className=' sm:mt-marginT  mt-[2rem]'>
        <h1 className='text-4xl md:text-5xl font-semibold mb-[6rem] text-center '>Delivery and pickup terms</h1>
        <CardDelivery/>
        <Map/>
        </div>
  )
}

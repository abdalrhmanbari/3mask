import React from 'react'
import CardDelivery from '../../Components/Card/card-delivery'
import map from "../../../../public/map.jpeg"
import Input from '../../Components/Input/input'
import Map from '../../Components/Component/map'
export default function Delivery() {
  return (
    <div className=' sm:mt-marginT  mt-[2rem]'>
        <h1 className='text-4xl md:text-6xl font-semibold text-center text-grey mb-[2rem]'>Delivery and pickup terms</h1>
        <CardDelivery/>
        <Map/>
        </div>
  )
}

import React from 'react'

export default function CartMask({count, img, title, disc}:{count:number, img:string, title:string, disc:string}) {
  return (
    <div className=' '>
        <span className=' font-bold text-linear'>0{count}</span>
        <div className=' bg-bgGrey rounded-tl-rounded rounded-br-rounded  p-[2rem]'>
        <h1 className=' flex gap-[0.8rem]  items-center'><img alt='..' src={img}/>{title}</h1>
        <p className=' text-secondary text-sm'>{disc}</p>
        </div>
    </div>
  )
}

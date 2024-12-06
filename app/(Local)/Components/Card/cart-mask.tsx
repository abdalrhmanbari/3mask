import Image from 'next/image'
import React from 'react'

export default function CartMask({count, src, title, disc}:{count:number, src:string, title:string, disc:string}) {
  return (
    <div className=' '>
        <span className=' font-bold text-linear'>0{count}</span>
        <div className=' bg-bgGrey rounded-tl-rounded rounded-br-rounded  p-[2rem]'>
        <h1 className=' flex gap-[0.8rem]  items-center'>
        <Image width={40} height={40} src={src} alt='mask' className=' object-cover' />
          {title}</h1>
        <p className=' text-secondary text-sm'>{disc}</p>
        </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'

export default function CardWholesale({src, title, disc}:{src:string, title:string, disc:string}) {
  return (
    <div className=' flex flex-col items-center gap-[1rem]  text-center w-[18rem] bg-white p-[1rem] rounded-tl-rounded rounded-br-rounded'>
        <Image width={70} height={70} src={src} alt='..' className=' object-cover'/>
        <h1 className=' font-semibold '>{title}</h1>
        <p className='text-secondary text-sm '>{disc}</p>
    </div>
  )
}

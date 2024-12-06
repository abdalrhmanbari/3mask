import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardCatalog({src, title}:{src:string, title:string}) {
  return (
    <div className=' bg-bgWhite flex flex-col justify-center items-center gap-[2rem] rounded-lg  p-[2rem] '>
        <div className=' w-[10rem] '>
          <Image alt='..' src={src} width={200} height={200} className=' w-full  flex justify-center'/>
        </div>
        <div className=' flex flex-col justify-center items-center gap-[2rem]'>
            <h1 className=' text-sm'>
                {title}
            </h1>
            <Link href={"/login"} className='bg-linear flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] rounded-full text-white w-fit' >
            Add to cart
            <Image alt='..' src='/Vector.png' width={25} height={25}/>
            </Link>
        </div>
         </div>
  )
}

import Link from 'next/link'
import React from 'react'

export default function CardCatalog({img, title}:{img:string, title:string}) {
  return (
    <div className=' bg-bgWhite flex flex-col justify-center items-center gap-[2rem] rounded-lg  p-[2rem] '>
        <div className=' w-[10rem] '>
        <img alt='...' src={img} className=' w-full  flex justify-center'/>
        </div>
        <div className=' flex flex-col justify-center items-center gap-[2rem]'>
            <h1 className=' text-sm'>
                {title}
            </h1>
            <Link href={"/login"} className='bg-linear flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] rounded-full text-white w-fit' >
            Add to cart
            <img alt='cart' src='/Vector.png'/>
            </Link>
        </div>
         </div>
  )
}

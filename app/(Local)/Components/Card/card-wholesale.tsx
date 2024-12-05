import React from 'react'

export default function CardWholesale({img, title, disc}:{img:string, title:string, disc:string}) {
  return (
    <div className=' flex flex-col items-center gap-[1rem]  text-center w-[18rem] bg-white p-[1rem] rounded-tl-rounded rounded-br-rounded'>
        <img alt='.' src={img}/>
        <h1 className=' font-semibold '>{title}</h1>
        <p className='text-secondary text-sm '>{disc}</p>
    </div>
  )
}

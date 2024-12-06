import React from 'react'

export default function CardMask({count, src, title, disc}:{count:number, src:string, title:string, disc:string}) {
  return (
    <div className=' flex flex-col gap-[1rem] '>
        <div className=' flex gap-[0.5rem]'>
            <img alt='.' src={src}/>
            <p className=' text-linear flex font-bold  items-end'>0{count}</p>
        </div>
        <div className=' bg-bgGrey rounded-tl-rounded rounded-br-rounded p-[2rem]'>
        <h1 className=' font-semibold'>{title}</h1>
        <p className=' text-secondary text-sm'>{disc}</p>
        </div>
    </div>
  )
}

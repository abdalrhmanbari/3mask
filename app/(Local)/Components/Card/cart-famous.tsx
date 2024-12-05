import React from 'react'

export default function CartFamous({title, disc, count}:{title:string, disc:string, count:number}) {
  return (
    <div className=' '>
        <span className=' text-linear font-bold mb-[0.7rem] '>0{count}</span>
        <div className='bg-bgGrey p-[2rem]  sm:h-[13rem] rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col gap-[0.5rem]'>
            <h1 className=' text'>{title}</h1>
            <p className=' text-sm text-secondary'>{disc}</p>
        </div>
    </div>
  )
}

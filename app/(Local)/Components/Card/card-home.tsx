import React from 'react'

export default function CardHome({title, disc, icon}:{title:string, disc:string, icon?:string}) {
  return (
    <div className=' flex gap-[.5rem]'>
        <span>
            <img alt='.' src={`${icon}`}  className=' min-w-[2rem] max-w-[2rem]'/>
            </span>
        <div className=' flex flex-col gap-[.5rem] sm:max-w-[80%]'>
        <h1 className=' text-grey text-lg font-semibold'>{title}</h1>
        <p className=' text-sm text-secondary'>{disc}</p>
        </div>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'

export default function CardFamous({title, disc}:{title:string, disc:string}) {
  return (
    <div className=' flex  gap-[0.5rem]'>
            <div className=' mt-[0.2rem] max-w-[1rem] min-w-[1rem] '>
                <Image alt='..' src="/.png" className=' w-full ' width={20} height={20}/>
            </div>
            <div className=' flex flex-col gap-[1rem]'>
            <h1 className=' font-semibold text-pattern'>{title}</h1>
            <p className=' text-secondary text-sm'>{disc}</p>
            </div>

    </div>
  )
}

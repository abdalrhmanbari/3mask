import React from 'react'

export default function Button({title, style}:{title:string, style?:string}) {
  return (
    <button className={` px-[2rem] py-[0.8rem]  rounded-full w-fit ${style}`}>
        {title}
    </button>
  )
}

import React from 'react'

export default function Input({img, id, name, type, placeholder}:{img:string, name:string, type:string, placeholder:string, id:string}) {
  return (
    <div className="flex items-center rounded-xl bg-bgGrey pl-3 outline outline-1 -outline-offset-1 outline-gray-100 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 ">
    <img alt='..' src={img}/>
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className="block min-w-0 grow py-2 pl-2 pr-3 text-base text-gray-900 bg-bgGrey placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
    />

  </div>
  )
}

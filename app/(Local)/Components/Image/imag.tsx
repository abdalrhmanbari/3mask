import Image from 'next/image'
import React from 'react'

export default function Imag({src, style}:{src:string, style?:string}) {
  return (
    <>
            <Image width={600} height={600}      src={src} alt='mask' className={` w-full   rounded-bl-rounded rounded-tr-rounded ${style}`} />
    </>
  )
}

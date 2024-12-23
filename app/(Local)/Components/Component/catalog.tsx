"use client"
import React, { useState } from 'react'
import Button from '../Button/button'
import CardCatalog from '../Card/card-catalog'
import { data } from '../../servers/context/context'


export default function Catalog({title, disc}:{title:string, disc?:string}) {
  const [product,setProduct ] = useState(data);
  // Filter
  const filterType = (type : any) => {
    setProduct(
      data.filter((item) => {
        return item.type === type;
      }) 
    );
  };
  return (
    <div className='py-paddingY bg-bgGrey  px-paddingX'>
        <h1 className=' text-3xl font-semibold flex flex-col gap-[0.5rem] justify-center  m-auto text-center'>{title} <span>{disc}</span></h1>
        <div className=' flex  flex-wrap items-center justify-center gap-[2rem] my-[2rem]'>
        <button className=" px-[2rem] py-[0.8rem]  rounded-full w-fit border border-linear text-secondary " onClick={() => setProduct(data)}>
          All products</button>
        <button className=" px-[2rem] py-[0.8rem]  rounded-full w-fit border border-linear text-secondary" onClick={() => filterType("FFP2")}>
        FFP2</button>
        <button className=" px-[2rem] py-[0.8rem]  rounded-full w-fit border border-linear text-secondary" onClick={() => filterType("FFP3")}>
        FFP3</button>
        <button className=" px-[2rem] py-[0.8rem]  rounded-full w-fit border border-linear text-secondary" onClick={() => filterType("Antiseptic")}>
        Antiseptic</button>
        <button className=" px-[2rem] py-[0.8rem]  rounded-full w-fit border border-linear text-secondary" onClick={() => filterType("slippers")}>
        slippers</button>
        {/* <Button title="All products" style=' text-white bg-linear' />
        <Button title="Respirators" style=' border border-linear text-secondary'/>
        <Button title="FFP1" style=' border border-linear text-secondary'/>
        <Button title="FFP2" style='border border-linear text-secondary'/>
        <Button title="FFP3" style='border border-linear text-secondary'/>
        <Button title="3M" style='border border-linear text-secondary'/>
        <Button title="Alina" style='border border-linear text-secondary'/>
        <Button title="slippers " style='border border-linear text-secondary'/> */}
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 justify-center gap-[2rem] '>
          
          {product.map((el) =>(
              <CardCatalog src={el.img} title={el.title} key={el.id}/>
            ))
          }
            {/* <CardCatalog src='/ffb2.png' title='Respirator (mask) KN95 FFP2 without valve'/>
            <CardCatalog src='/ffb2(1).png' title='Respirator (mask) KN95 FFP2'/>
            <CardCatalog src='/ffb2(2).png' title='Respirator (mask) KN95 Black FFP2'/>
            <CardCatalog src='/60c08ee91a179e5f76206a7bf6c0d2ba.png' title='Disposable slippers spunbond/transparent/black'/>
            <CardCatalog src='/e4129fab0141480b918396b20ba52bd5.png' title='Slippers Terry Optima Plus, disposable'/>
            <CardCatalog src='/cf838f5661eb2657d2ed4d1d170b63cc.png' title='Antiseptic gel Septel(50 ml)'/>
            <CardCatalog src='/fca42118737ba4c0d5c5a1148328d596.png' title='Protective face screen'/>
            <CardCatalog src='/7bf75f1a8a9593b1ddd5751d6617614d.png' title='Sanitizer antiseptic spray (50 ml.)'/>
            <CardCatalog src='/d2da4d770400523a10a6ba4059006dce.png' title='Respirator for children KN95 FFP2 Kitten blue'/> */}
        </div>
        <span className=' mt-[2rem] text-primary  flex items-center justify-center border border-x-0 border-t-0    border-b-primary w-fit m-auto'>All products</span>
    </div>
  )
}

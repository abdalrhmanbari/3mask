import React from 'react'
import Button from '../../Components/Button/button'
import CardMask from '../../Components/Card/card-mask'
import Catalog from '../../Components/Component/catalog'
import CartMask from '../../Components/Card/cart-mask'
import Image from 'next/image'
import Imag from '../../Components/Image/imag'

export default  function Protection() {
  return (
    <div  className=' pb-[2rem] sm:mt-marginT  mt-[2rem]'>
        <div className=' flex justify-between flex-col md:flex-row pt-[2rem] gap-[4rem] mb-[6rem]'>
            <div className='  flex flex-col gap-[2rem]  '>
                <h1 className='text-4xl md:text-6xl flex flex-col font-semibold text-grey   '>Mask for COVID-19
                <span>
                Which one helps and which one harms?
                </span>
                </h1>
                <p className='text-base sm:text-xl text-secondary'>COVID-19 Statistics in Syria</p>
                <div className=' flex flex-wrap justify-between items-center'>
                <div className=' flex flex-col gap-[0.5rem]'>
                    <span className=' flex gap-[0.5rem] items-center font-semibold'>
                    <Image alt='..' src={"/.png"} width={20} height={20} className=' object-cover'/>

                        55872</span>
                    <p className=' text-secondary text-sm ms-[1.5rem]'>Infected</p>
                </div>
                <div className=' flex flex-col gap-[0.5rem]'>
                    <span className=' flex gap-[0.5rem] items-center font-semibold'>
                    <Image alt='..' src={"/.png"} width={20} height={20} className=' object-cover'/>
                        52524</span>
                    <p className=' text-secondary text-sm ms-[1.5rem]'>Recovered</p>
                </div>
                <div className=' flex flex-col gap-[0.5rem]'>
                    <span className=' flex gap-[0.5rem] items-center font-semibold'>
                    <Image alt='..' src={"/.png"} width={20} height={20} className=' object-cover'/>
                        3150</span>
                    <p className=' text-secondary text-sm ms-[1.5rem]'>Dead</p>
                </div>
                </div>
                <Button title='Go To Catalog' style='bg-linear text-white'/>
            </div>
            <div className=' w-full  md:min-w-[45%] md:max-w-[45%] md:mt-0   m-auto'
            >
                <Imag src='/mask-home.jpeg'/>

            </div>
        </div>
        <div className=' flex flex-col gap-[4rem]'>
        <div className=' flex gap-[4rem] flex-col-reverse     sm:flex-row  justify-center items-center'> 
            <div className='  sm:min-w-[40%] sm:max-w-[40%] w-full '>
            <Image width={500} height={500}      src='/5b3c00477f5f20adb5f0cc1c62acee6f.jpeg' alt='mask' className='  w-full   rounded-bl-rounded rounded-tr-rounded object-cover' />

            </div>
            <div className=' flex flex-col gap-[2rem]'>
        <h1 className=' text-xl font-semibold'>The best way to avoid infection</h1>
        <p className=' text-secondary text-sm'>This is to completely isolate yourself from its sources. But this is almost impossible if you live in a city. You can avoid large crowds of people, but the virus can still catch up with you.</p>
        <p className=' text-secondary text-sm'>In this article, we will tell you how you can protect yourself as much as possible and how not to harm yourself in such difficult times.</p>
            </div>
        </div>

        <div className='flex gap-[4rem] flex-col     sm:flex-row  justify-center items-center'> 
            <div className=' flex flex-col gap-[2rem]'>
        <h1 className=' text-xl font-semibold'>What won't save you?</h1>
        <h1 className=' text-xl font-semibold flex gap-[0.5rem] items-center'><img alt='.' src='/Ellipse 15.png' className=' w-[.8rem] h-[.8rem] object-cover'/>Medical and cotton masks</h1>

        <p className=' text-secondary text-sm'>The idea that a medical three-layer mask helps prevent coronavirus infection is a big misconception. In the case of coronavirus, such masks, as well as reusable and fabric ones, do not protect against infection, but only help prevent the virus from spreading further.</p>
            </div>
            <div className=' sm:min-w-[40%] sm:max-w-[40%] w-full '>
            <Image width={500} height={500}      src='/7b61a909cf5a88c9fa68e9408410b575.jpeg' alt='mask' className='  w-full   rounded-bl-rounded rounded-tr-rounded object-cover' />
            </div>
        </div>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]'>
        <CardMask count={1} src='/icon (1)00.png' title='Material' disc='Virus molecules are much smaller than the distance between the fibers of the fabric. Masks protect others from the sick person wearing the mask - he spreads less infection in it. That is why they are mandatory for surgeons during operations: his individual bacteria do not get into the patients open tissues.'/>
        <CardMask count={2} src='/facemask virus covid19 corona mask.png' title="They don't fit tightly" disc='The elastic bands of the mask are held on the ears, which is why the mask often slips and creates discomfort. You have to adjust it. Every touch of the mask with your hands carries the risk of infection getting inside. There are also vulnerable areas under the eyes, where the mask does not fit tightly. Therefore, the virus has a higher chance of getting inside.'/>
        <CardMask count={3} src='/icon000.png' title='Condensate' disc='Exhaled air remains on the inside of the medical mask and creates condensation. The fabric gets wet and is saturated with bacteria, which can worsen the situation. A medical mask should not be worn for more than 2-3 hours. Otherwise, it becomes dangerous for a person.'/>
        </div>
        <div className=' flex gap-[4rem] flex-col     sm:flex-row  justify-center items-center'> 
            <div className=' flex flex-col gap-[2rem]'>
        <h1 className=' text-xl font-semibold'>Will a respirator help?</h1>
        <p className=' text-secondary text-sm'>Respirators fit tightly to the face and are divided into protection classes based on the degree of air purification: FFP1, FFP2, FFP3.</p>
        <p className=' text-secondary text-sm'>In this article, we will tell you how you can protect yourself as much as possible and how not to harm yourself in such difficult times.</p>
            </div>
            <div className='  sm:min-w-[40%] sm:max-w-[40%] w-full '>
            <Image width={500} height={500}      src='/dde4f325fd6c5bd61cfc3e3f94f49cbf.jpeg' alt='mask' className='  w-full   rounded-tl-rounded rounded-br-rounded  object-cover' />
            </div>
        </div>
        <div className=' flex gap-[4rem] flex-col-reverse     sm:flex-row  justify-center items-center'> 
            <div className='   sm:min-w-[40%] sm:max-w-[40%] w-full h-[20rem] '>
            <Image width={500} height={500}      src='/350a84c65ffcb3c87da139c80cb37268.jpeg' alt='mask' className='  w-full  h-full  rounded-tl-rounded rounded-br-rounded  object-cover' />
            </div>
            <div className=' flex flex-col gap-[2rem]'>
        <h1 className=' text-xl font-semibold flex flex-col'>Masks and respirators <span>don't protect your eyes?</span></h1>
        <h1 className=' text-lg font-semibold'>Remember</h1>
                
        <p className=' text-secondary text-sm'>Masks only protect the respiratory system. They do not cover the mucous membrane of the eyes, so the risk of infection still remains. To increase your own protection, you should use protective glasses, as officially recommended by WHO.</p>
        <p className=' text-secondary text-sm'>ITo protect your eyesight, it is recommended to use glasses with indirect ventilation. They prevent the protective glass from fogging up and allow you to wear them for a long time without taking them off.</p>
            </div>
        </div>
        <div className=' bg-bgWhite flex flex-col gap-[2rem]'>
            <h1  className='text-2xl sm:text-3xl  font-semibold flex flex-col text-center'>Basic precautions<span>to protect against the new coronavirus infection</span></h1>
                <p className=' text-pattern mt-[1rem] text-center'>WHO recommendations</p>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem]'>
                    <CartMask count={1} src='/wash-your-hands 1.png' title='Wash your hands regularly' disc='With soap for at least 20 seconds or use an alcohol-based sanitizer.' />
                    <CartMask count={2} src='/1111.png' title='Keep your distance' disc='Stay at least 1 metre away from people, especially if they have a cough, runny nose or fever.' />
                    <CartMask count={3} src='/icon (1)111.png' title='Observe the rules of hygiene' disc='If possible, avoid touching your eyes, nose and mouth with your hands and practice respiratory hygiene.' />
                    <CartMask count={4} src='/icon (2)11.png' title='Seek medical help' disc='If you develop a fever, cough or difficulty breathing, seek medical attention as soon as possible.' />
                </div>
        </div>
            <Catalog title='The best protection on 3MASKI.RU' disc='All products in stock'/>
        </div>

    </div>
  )
}

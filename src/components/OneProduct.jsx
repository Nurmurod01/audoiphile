import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function OneProduct() {
  return (
    <div className='flex flex-col  xl:flex-row xl:justify-between'>
        <div className='flex flex-col items-center xl:items-start xl:text-left text-center w-full xl:max-w-[445px]'>
            <strong className='text-[#D87D4A] tracking-[10px] mb-6 md:mb-10 xl:mb-4 text-sm'>NEW PRODUCT</strong>
            <h2 className='mb-6 text-2xl uppercase md:mb-8 md:text-4xl font-bold'>XX99 Mark II
            Headphones</h2>
            <p className='text-black-50 mb-6 xl:mb-10'>
            The new XX99 Mark II headphones 
            is the pinnacle of pristine audio. 
            It redefines your premium headphone 
            experience by reproducing the 
            balanced depth and precision of 
            studio-quality sound. 
            </p>
            <Button className='bg-orang hover:bg-[#FBAF85] text-light-gray' width-160px height-48px>See Product</Button>

        </div>
        <div className='-order-1 xl:-order-none shrink-0'>
            <picture>
                <source media='(main-width: 1280px' srcSet={''}/>
                <source media='(main-width: 768px' srcSet={''}/>
                <Image 
                className='mb-8 md:mb-12 w-[327] xl:mb-0 h-[352px] md:w-[689] xl:w-[540px] xl:h-[560px]'
                src={""}
                width={327}
                height={352}
                alt="image is not defined"
                />
            </picture>

        </div>
    </div>
  )
}

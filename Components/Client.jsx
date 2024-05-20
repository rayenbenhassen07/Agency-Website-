'use client';
import React from 'react'
import Image from 'next/image'

import {components} from "@/lang";
import useLanguage from "@/hooks/useLanguage";


const Client = () => {
  const language = useLanguage();
  return (
    <div className='w-full map text-center text-white py-10  lg:mb-0'>
      
      <h2 className='space-x-5 tracking-widest text-sm lg:text-lg font-semibold text-blue-500' data-aos="fade-down" data-aos-delay="100">{components.Client?.[language.valeur].Title1}</h2>
     
      <h1 className='space-x-5 tracking-widest text-lg lg:text-3xl font-extrabold' data-aos="fade-down" data-aos-delay="200">{components.Client?.[language.valeur].Title1}</h1>
      
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:mx-20 mx-2 '>

      <Image
            src="/Client/map.png"
            width={800}
            height={210}
            className=" "
            alt="Picture of the author"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
       />

      </div>
      
      
    </div>
  )
}

export default Client
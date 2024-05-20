'use client';
import React from 'react'

import {components} from "@/lang";
import useLanguage from "@/hooks/useLanguage";

const Statistic = () => {

  const language = useLanguage();
  return (
    <div className='w-full Number text-center text-white py-20' id='Statistic'>
      
      <h2 className='space-x-5 tracking-widest text-sm lg:text-lg font-semibold text-blue-500' data-aos="fade-down" data-aos-delay="200">{components.Statistic?.[language.valeur].Title1}</h2>
     
      <h1 className='space-x-5 tracking-widest text-lg lg:text-3xl font-extrabold' data-aos="fade-down" data-aos-delay="300">{components.Statistic?.[language.valeur].Title2}</h1>
      
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:mx-20 mx-2 my-10'>

        <div className='flex flex-col items-start gap-5  w-full px-4 lg:w-1/3' data-aos="fade-down" data-aos-delay="100">
          <div className='text-2xl lg:text-4xl font-extrabold text-blue-400 border-white border-2 p-3 rounded-full shadow_White_2 '>+11</div>
          <div className='text-start text-sm lg:text-base'>{components.Statistic?.[language.valeur].p1}</div>
        </div>

        <div className='flex flex-col items-start gap-5  w-full px-4 lg:w-1/3' data-aos="fade-down" data-aos-delay="200">
          <div className='text-2xl lg:text-4xl font-extrabold text-blue-400 border-white border-2 p-3 rounded-full shadow_White_2'>90%</div>
          <div className='text-start text-sm lg:text-base'>{components.Statistic?.[language.valeur].p2}</div>
        </div>

        <div className='flex flex-col items-start gap-5  w-full px-4 lg:w-1/3' data-aos="fade-down" data-aos-delay="300">
          <div className='text-2xl lg:text-4xl font-extrabold text-blue-400 border-white border-2 p-3 rounded-full shadow_White_2'>-6</div>
          <div className='text-start text-sm lg:text-base'>{components.Statistic?.[language.valeur].p2}</div>
        </div>

      </div>
      
      <div className='pt-10 flex flex-col gap-5 mx-2 lg:text-lg ' >
        <div data-aos="fade-down" data-aos-delay="10">{components.Statistic?.[language.valeur].p4Party1}</div>
        <div data-aos="fade-down" data-aos-delay="30">{components.Statistic?.[language.valeur].p4Party2}</div>
        <div data-aos="fade-down" data-aos-delay="50">{components.Statistic?.[language.valeur].p4Party3}</div>
      </div>
    </div>
  )
}

export default Statistic
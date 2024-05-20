'use client'

import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


import {components} from "@/lang";
import useLanguage from "@/hooks/useLanguage";

const Services = () => {

  const language = useLanguage();
  return (
    <div className=' text-center text-white py-20 px-2 bg-primary' id='Services'>
      
      <h2 className='space-x-5 tracking-widest text-sm lg:text-lg font-semibold text-blue-500' data-aos="fade-down" data-aos-delay="100">{components.Services?.[language.valeur].Title1}</h2>
     
      <h1 className='space-x-5 tracking-widest text-lg lg:text-3xl font-extrabold' data-aos="fade-down" data-aos-delay="200">{components.Services?.[language.valeur].Title2}</h1>

      <div className='pt-10 flex flex-col gap-5 mx-2 lg:text-lg '>
        <div data-aos="fade-down" data-aos-delay="300">{components.Services?.[language.valeur].Title3}</div>
        <h2 data-aos="fade-down" data-aos-delay="250">{components.Services?.[language.valeur].Title4}</h2>
      </div>
      
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:mx-20 mx-2 my-10 text-black'>

        <div className='flex flex-col items-start gap-5  px-4  pt-10 pb-20 rounded-xl shadow-lg bg-blue-100 shadow_White_3' data-aos="flip-left">
            <div className='flex gap-2 justify-center '>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium '>{components.Services?.[language.valeur].Service1}</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium'>{components.Services?.[language.valeur].Service2}</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium'>{components.Services?.[language.valeur].Service3}</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium'>{components.Services?.[language.valeur].Service4}</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium '>{components.Services?.[language.valeur].Service5}</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium text-start'>{components.Services?.[language.valeur].Service6}</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium'>{components.Services?.[language.valeur].Service7}</div>
            </div>
            
        </div>

      </div>

      <div className='pt-5 flex flex-col gap-5 mx-2 lg:text-lg items-center'>
        <div data-aos="fade-down" data-aos-delay="20">{components.Services?.[language.valeur].Title5}</div>
        <div data-aos="fade-down" data-aos-delay="10">{components.Services?.[language.valeur].Title6}</div>
        <a href="#calendly"><button className='bg-blue-500 hover:bg-blue-400 p-3 lg:p-5 rounded-3xl text-white font-bold lg:text-xl shadow-lg shadow_blue_2' data-aos="fade-down">{components.Services?.[language.valeur].Consultations}</button></a>
      </div>
      
      
    </div>
  )
}

export default Services
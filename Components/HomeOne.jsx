'use client'
import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";


import {components} from "@/lang";
import useLanguage from "@/hooks/useLanguage";
import Image from 'next/image';


const HomeOne = () => {

  
  
  const language = useLanguage();

  return (
    <>
    <div className='w-full home bg-white text-black' id='home'>
    <div className='max-w-[1220px] pt-10 lg:pt-0 px-2 ml-auto mr-auto'>
      <div className='lg:pt-20  w-full '>
        <div className='flex flex-col justify-center items-center py-10  gap-10'>
          <Image src="/3d/Action+pan_tool_R Shadowless.png" width={1000} height={1000} className="w-28 lg:w-48 absolute top-48 left-10 lg:left-28" alt="Picture of the author"/>
          <Image src="/3d/Arrow_Left_R Shadowless.png" width={1000} height={1000} className="w-28 lg:w-48 absolute top-36 right-10 lg:right-28" alt="Picture of the author"/>
          <Image src="/3d/Glass Prism Hovering Geometry Pack 2.png" width={1000} height={1000} className=" w-28 lg:w-48 absolute top-20 left-10 lg:left-28" alt="Picture of the author"/>
          <Image src="/3d/Magnifying_Glass0002.png" width={1000} height={1000} className="w-28 lg:w-48 absolute top-96 right-10 lg:right-28" alt="Picture of the author"/>
          <h2 className=' text-sm lg:text-lg text-black' data-aos="fade-down">{components.HomeOne?.[language.valeur].Title1}</h2>
          <h1 className='lg:mx-5 uppercase  font-extrabold  text-3xl md:text-4xl lg:text-6xl text-transparent text-center tracking-tight bg-clip-text bg-gradient-to-r from-blue-600 via-neutral-600 to-blue-600' data-aos="fade-down" data-aos-delay="100" >{components.HomeOne?.[language.valeur].Title2}</h1>
          
          <div className='text-center text-md p-8 lg:px-20 lg:font-semibold' data-aos="fade-down" data-aos-delay="200"> {components.HomeOne?.[language.valeur].p1}</div>
          <a href="#calendly"><button className='button_orange bg-orange-500 hover:bg-orange-400 p-3 lg:p-5 rounded-3xl text-white font-bold lg:text-xl shadow-lg cursor-pointer' data-aos="fade-down" data-aos-delay="300"   >{components.HomeOne?.[language.valeur].Consultations}</button></a>

          <div className='flex flex-col items-center gap-5 ' data-aos="zoom-in">
            <div className='space-x-5 tracking-widest'>{components.HomeOne?.[language.valeur].Weuse}</div>
            <div className="flex flex-wrap justify-center  items-center gap-5 lg:gap-10">
              <FaHtml5  className=' text-4xl' />
              <DiCss3 className='text-4xl'/>
              <IoLogoJavascript className='text-4xl'/>
              <FaReact className='text-4xl'/>
              <TbBrandNextjs className='text-4xl'/>
              <SiTypescript className='text-4xl'/>
              <BiLogoPhp className='text-4xl'/>
              <FaGithub className='text-4xl'/>
              <BiLogoMongodb className='text-4xl'/>
              <SiNodedotjs className='text-4xl'/>
              <SiTailwindcss className='text-4xl'/>
              <FaWordpress className='text-4xl'/>


            </div>
          </div>
        </div>

        </div>
      </div>
      </div>
    </>
    
  )
}

export default HomeOne
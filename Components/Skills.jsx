'use client';
import React from 'react'
import Image from 'next/image'

import {components} from "@/lang";
import useLanguage from "@/hooks/useLanguage";

const Skills = () => {

    const language = useLanguage();

  return (
    <div id='Skills' className='bg-white'>
        
        <div className='info flex flex-col gap-5 text-center py-10 px-2 lg:px-20     bg-neutral-800 w-full text-white' data-aos="fade-up" >
            <h2 className='space-x-5 tracking-widest text-sm lg:text-lg font-semibold text-blue-500' data-aos="fade-down" data-aos-delay="100">{components.Skills?.[language.valeur].Title1}</h2>
            <h1 className='space-x-5 tracking-widest text-lg lg:text-3xl font-extrabold' data-aos="fade-down" data-aos-delay="200" >{components.Skills?.[language.valeur].Title2}</h1>
           <div className='grid grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-5 mt-10'>

                {/* row :1*/}
                <div className=' flex flex-col items-center gap-4 w-full   lg:px-10' data-aos="zoom-in-up">
                    <div className='bg-neutral-700 rounded-lg ' >
                        <Image
                            src="/Whyus/paper.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3 shadow_White_1"
                            alt="Picture of the author"
                            
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>{components.Skills?.[language.valeur].Expertise}</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%] '>{components.Skills?.[language.valeur].ExpertiseP}</div>
                </div>
                
                {/* row :2*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10' data-aos="zoom-in-up" >
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/result.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3 shadow_White_1"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>{components.Skills?.[language.valeur].Tailored}</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>{components.Skills?.[language.valeur].TailoredP}</div>
                </div>

                {/* row :3*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10' data-aos="zoom-in-up">
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/assurence.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3  shadow_White_1"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>{components.Skills?.[language.valeur].Quality}</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>{components.Skills?.[language.valeur].QualityP}</div>
                </div>

                {/* row :4*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10' data-aos="zoom-in-up">
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/compain.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3 shadow_White_1 "
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>{components.Skills?.[language.valeur].Collaborative}</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>{components.Skills?.[language.valeur].CollaborativeP}</div>
                </div>

                {/* row :5*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10' data-aos="zoom-in-up">
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/time.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3 shadow_White_1 "
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>{components.Skills?.[language.valeur].Timely}</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>{components.Skills?.[language.valeur].TimelyP}</div>
                </div>

                {/* row :6*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10' data-aos="zoom-in-up">
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/support.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3 shadow_White_1"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>{components.Skills?.[language.valeur].Continuous}</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>{components.Skills?.[language.valeur].ContinuousP}</div>
                </div>

                
            </div>

        </div>
    </div>
  )
}

export default Skills
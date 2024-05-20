'use client'
import React from 'react'
import { InlineWidget } from 'react-calendly'
import useLanguage from "@/hooks/useLanguage";
import {components} from "@/lang";

const Calendly = () => {
  const language = useLanguage();
  return (
    <>  

      <div className='bg-primary overflow-y-hidden flex flex-col justify-center items-center text-white' id="calendly">
        <h1 className='space-x-5 tracking-widest text-lg lg:text-3xl font-extrabold'>{components.Calendly?.[language.valeur].Consultations}</h1>
        <InlineWidget url="https://calendly.com/roubly/consultation" styles={{ height: '1000px', width: '100%', borderRadius: '20px' }} />
      </div>
    </>
  )
}

export default Calendly
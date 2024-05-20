'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';


import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import {FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import Footer from '@/Components/Footer';
import useDomain from '@/hooks/useDomain';

import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {

  const domain = useDomain();
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    AOS.init({
        duration : 800,
        once : true,
        mirror : true,
        easing : "ease-in-out"
    });
});

  return (
    <>

        <Link href={domain.path} className=''>
          <div className='fixed z-40 bg-blue-700 hover:bg-black text-white hover:text-blue-700 transition top-5 left-5 lg:top-10 lg:left-10 rounded-full p-2 lg:p-5 animate-bounce'>
            <FaArrowLeft className='font-bold text-xl lg:text-5xl ' />
          </div>
        </Link>

        <div className='container mx-auto px-4 py-8 pt-24'>
        {isLoading ? (
            <div className='flex justify-center items-center h-screen text-6xl'>
              <span className="loading loading-spinner loading-lg "></span>
            </div>
          ) : (
          <div className='max-w-4xl mx-auto'>
            <Image className='w-full mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web3.png" alt='' data-aos="fade-down" data-aos-delay="400"/>
            <h2 className='text-2xl font-bold mb-2' data-aos="fade-down" data-aos-delay="100">A charitable website for ARIJ organization</h2>
            <p className='text-gray-700 mb-2 text-sm lg:text-base'  data-aos="fade-down">
              <span className=' font-bold'>Description:</span>{" "}
              "At Roubly, we're honored to have partnered with Arij, a charitable organization dedicated to making a positive impact in our community. Leveraging the power of Next.js and MongoDB, we've created a dynamic and resilient website that serves as a digital hub for Arij's mission-driven initiatives. With a multitude of pages meticulously crafted to engage and inform visitors, users can seamlessly explore upcoming events, past activities, and ways to get involved. Additionally, our implementation of a comprehensive admin dashboard empowers the Arij team to manage all aspects of the website effortlessly. From adding new events and activities to editing existing content and even deleting outdated information, the dashboard provides intuitive controls for Arij's administrators, ensuring that the website remains dynamic and responsive to their evolving needs. At Roubly, we're committed to using our expertise to amplify the voices of organizations like Arij, and we're proud to have played a part in furthering their impactful work."
            </p>
            <div className='w-full flex flex-wrap  justify-start gap-3 mt-3'>
              
                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-black w-20' data-aos="fade-up-right" data-aos-delay="400">
                    <SiNextdotjs />
                    <div>Nextjs</div>
                </div>

                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-green-700 w-28' data-aos="fade-up-right" data-aos-delay="200">
                    <SiMongodb />
                    <div>MongoDb</div>
                </div>

            </div>

            {/* Other images*/}
            <div className='w-full flex justify-center items-center gap-3 mt-10 '>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web3.png" alt='' data-aos="fade-up" data-aos-delay="300"/>
                </div>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web5.png" alt='' data-aos="fade-up" data-aos-delay="250"/>
                </div>
            </div>
            <div className='w-full '>
                <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web4.png" alt='' data-aos="fade-up" data-aos-delay="200"/>
            </div>
            <div className='w-full flex justify-center items-center gap-3 mt-10 '>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web1.png" alt='' data-aos="fade-up" data-aos-delay="150"/>
                </div>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web2.png" alt='' data-aos="fade-up" data-aos-delay="100"/>
                </div>
            </div>
            
            {/* ------------

            <div className='w-full text-center mt-10'>
                <button className=' bg-blue-500 hover:bg-blue-400 p-3 lg:p-5 rounded-lg text-white font-bold lg:text-xl shadow-lg ' >    FREE CONSULTATIONS </button>
            </div>
            */}
            {/* Add more fields as needed */}
          </div>
          
        )}
       
        </div>

        <Footer/>
    </>
  )
}

export default page
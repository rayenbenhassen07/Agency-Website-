'use client';

import React, { useState, useEffect } from 'react';


import Image from 'next/image';
import { FaReact , FaHtml5 , FaCss3Alt,FaArrowLeft } from "react-icons/fa";

import Footer from '@/Components/Footer';
import Link from 'next/link';

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

    /*
    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 2000); // Simulate 2 seconds of loading
    
        return () => clearTimeout(timeout);
      }, []);
    */
  return (
    <>
       <Link href={domain.path} className=''>
          <div className='fixed z-40 bg-blue-700 hover:bg-black text-white hover:text-blue-700 transition top-5 left-5 lg:top-10 lg:left-10 rounded-full p-2 lg:p-5 animate-bounce'>
            <FaArrowLeft className='font-bold text-xl lg:text-5xl ' />
          </div>
        </Link>


        <div className='container mx-auto px-4 py-8 pt-24' >
        {isLoading ? (
            <div className='flex justify-center items-center h-screen text-6xl'>
              <span className="loading loading-spinner loading-lg "></span>
            </div>
          ) : (
          <div className='max-w-4xl mx-auto' >
            <Image className='w-full mb-4 rounded-lg' width={1000} height={1000} src="/Projects/rayenPotfolio/web1.png" alt='' data-aos="fade-down" data-aos-delay="400" />
            <h2 className='text-2xl font-bold mb-2' data-aos="fade-down" data-aos-delay="100">Portfolio website</h2>
            <p className='text-gray-700 mb-2 text-sm lg:text-base' data-aos="fade-down" >
              <span className=' font-bold'>Description:</span>{" "}
              "At Roubly, we're thrilled to have had the opportunity to develop Rayen Benhassen's portfolio website. Crafted with precision and powered by React, this website serves as a stunning showcase of Rayen's creative journey and expertise. Our team poured passion and expertise into every aspect of the development process, ensuring that the website not only reflects Rayen's talents but also sets a new standard for online portfolios. From seamless user experiences to visually captivating design elements, we're proud to have played a part in bringing Rayen's vision to life. Explore the website to see the culmination of our collaboration and the innovative possibilities of React in action."
            </p>
            <div className='w-full flex flex-wrap  justify-start gap-3 mt-3'>
              
                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-blue-500 w-20' data-aos="fade-up-right" data-aos-delay="400">
                    <FaReact />
                    <div>react</div>
                </div>
                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-red-500 w-20' data-aos="fade-up-right" data-aos-delay="200">
                    <FaHtml5 />
                    <div>Html</div>
                </div>

                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-blue-700 w-20' data-aos="fade-up-right">
                    <FaCss3Alt />
                    <div>Css</div>
                </div>

            </div>

            {/* Other images*/}
            <div className='w-full flex justify-center items-center gap-3 mt-10 '>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg' width={1000} height={1000} src="/Projects/rayenPotfolio/web3.png" alt='' data-aos="fade-up" data-aos-delay="200"/>
                </div>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg' width={1000} height={1000} src="/Projects/rayenPotfolio/web2.png" alt='' data-aos="fade-up" data-aos-delay="50"/>
                </div>
            </div>
            <div className='w-full '>
                <Image className=' mb-4 rounded-lg' width={1000} height={1000} src="/Projects/rayenPotfolio/web4.png" alt='' data-aos="fade-up" data-aos-delay="100"/>
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
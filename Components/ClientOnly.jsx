"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useState,useEffect } from 'react'


const ClientOnly = ({children}) => {

    const [hasMounted , setHasMounted] = useState(false);

    useEffect(()=>{
        setHasMounted(true);
    },[])

    useEffect(()=>{
        AOS.init({
            duration : 800,
            once : true,
            mirror : true,
            easing : "ease-in-out"
        });
    });

    if(!hasMounted) {
        return null;
    }

    

    return (
        <>
            {children}
        </>
    )
}

export default ClientOnly
import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-blue-950 flex flex-col lg:flex-row justify-center items-center gap-2 text-white text-xs lgtext-sm p-2'>
      <div className='flex items-center justify-center gap-2'>
        <div>Copyrights 2024 |</div>
        <div>Roubly |</div>
        <div>Built with Roubly.com ⚡</div>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <a href="https://www.linkedin.com/company/roubly/" target="_blank"><FaLinkedin size={20}/></a> |
        <a href="https://www.instagram.com/rayenbenhassen12/" target="_blank"><RiFacebookBoxFill size={20}/></a> |
        <a href="https://www.facebook.com/profile.php?id=100038322585073" target="_blank"><FaInstagramSquare size={20}/></a> |
        <p>Support@roubly.com</p>
      </div>
    </div>
  );
};

export default Footer;

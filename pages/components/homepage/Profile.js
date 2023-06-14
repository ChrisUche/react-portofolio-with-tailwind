import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";
import deved from "/public/dev-ed-wave.png";
import Image from "next/image";
import { useState } from 'react';

export function Profile() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const handleButtonClick = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="relative">
        <div className={`text-center px-10 ${isMenuOpen ? 'transform -translate-y-7 opacity-80' : ''}`}>
          <div className={`text-center px-10 ${isMenuOpen ? 'menu-open' : ''}`} style={{ transform: isMenuOpen ? 'translateY(-50%)' : '' }}>
            <h2 className="text-5xl text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nnamocha Uche Chris
            </h2>
            <h3 className="text-2xl dark:text-white md:text-3xl">Developer and designer.</h3>
            <p className="text-md leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content needs. Join me down below and let's get
              cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle className="hover:scale-110 cursor-pointer hover:text-gray-800 dark:hover:text-slate-100" />
              <AiFillLinkedin className="hover:scale-110 cursor-pointer hover:text-gray-800 dark:hover:text-slate-100" />
              <AiFillYoutube className="hover:scale-110 cursor-pointer hover:text-gray-800 dark:hover:text-slate-100" />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-2 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
  
        <button
          className={`z-20 absolute left-1/2 transform -translate-x-1/2 ${isMenuOpen ? '-translate-y-full' : 'bottom-10'} w-12 h-12 bg-[#802200] hover:bg-opacity-80 hover:scale-105 hover:ease-in px-[38px] py-[14px] rounded-lg text_font text-white`}
          onClick={handleButtonClick}
        >
        </button>
  
        {isMenuOpen && (
            <div className="bg-gray-200 p-6 rounded-t-md h-1/2 w-full transform -translate-y-56">
              <h2 className="text-xl font-bold text-gray-800">Menu Item 1</h2>
              <h2 className="text-xl font-bold text-gray-800">Menu Item 2</h2>
              <h2 className="text-xl font-bold text-gray-800">Menu Item 3</h2>
            </div>
          
        )}
      </div>
    );
  }
  

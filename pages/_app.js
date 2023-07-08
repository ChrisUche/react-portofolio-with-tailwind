import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import NavBar from './components/homepage/NavBar'
import { motion as m } from "framer-motion";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { data } from './components/homepage/MockImage';
import React, { useEffect, useRef, useState } from 'react'


function MyApp({ Component, pageProps, router }) {
 const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };
   const handleLinkClick = () => {
   setMenuOpen(false);
 };

const [width, setWidth] = useState(0);
const carousel = useRef(null);

useEffect(() => {
  if (carousel.current) {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }
}, []);

  // const slideLeft = () => {
  //   var slider = document.getElementById('slider');
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };

  // const slideRight = () => {
  //   var slider = document.getElementById('slider');
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };
  return (<>
      <NavBar />
      <div className={` ${isMenuOpen ? 'menu-open opacity-50' : ''}`} style={{ transform: isMenuOpen ? '' : '' }}>
      <AnimatePresence >
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      </div>
      <m.button
        initial={{y: "100%", opacity:0}} 
        animate={{y:0, opacity:1, scale: [, isMenuOpen ? 0.90 : 1] }}
        exit={{opacity:0}}
        transition={{duration: 2, ease:"easeOut"}}
        whileHover={{ scale: 1.1, transition: { duration: 0, ease:"easeInOut" } }}
        
        className={`z-30 shadow-zinc-900  fixed  left-1/2  bottom-8 transform  transition-transform  w-12 h-12 bg-[#802200] hover:bg-opacity-80 hover:ease-in  md:w-20 md:h-20 rounded-full `}
          onClick={handleButtonClick}
        >
           
        </m.button>

        <m.div
          exit={{ opacity: 0 }}
          className={` z-10 fixed inset-0 items-center justify-center  w-full  transition-transform ${
            isMenuOpen
              ? 'menu-open flex items-center justify-center text-center'
              : 'scale-0 transform -translate-y-72 opacity-50'
          } `}
        >
          {isMenuOpen && (
            <m.div className='relative flex items-center ' ref={carousel}>
              {/* <MdChevronLeft onClick={slideLeft} size={40} className='z-30'/> */}
              <m.div 
                drag="x" 
                dragConstraints={{ right:700, left: -800 }}
                id='slider' 
                className='flex justify-around  rounded-t-md gap-5 transition-all w-full h-full overflow-hidden '>
                {data.map((item) => (
                  <Link href={item.link} key={item.id} >
                    <div  className='bg-slate-800 w-[280px]' onClick={handleLinkClick}>
                      <Image
                        width={237}
                        height={181}
                        src={item.img}
                        className=' hover:scale-105 duration-300 cursor-pointer ease-in-out '
                        alt=''
                      />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </m.div>
              {/* <MdChevronRight onClick={slideRight} size={40} className='z-30' /> */}
            </m.div>
          )}
        </m.div>
  </>
      
    )
    
}

export default MyApp
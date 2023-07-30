import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import NavBar from './components/homepage/NavBar'
import { motion as m } from "framer-motion";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useEffect, useRef, useState } from 'react'
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import deved from "/public/dev-ed-wave.png";
import about from "/public/about.png";
import web5 from '/public/web5.png';
import web6 from '/public/web6.png';
import plane from '/public/plane.png';
import home from '/public/home.png';
import contact from '/public/contact.jpg';



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

  
const data = [
  {
    id: 1,
    name: 'Home',
    img: home,
    link: "/"
  },
  {
    id: 2,
    name: 'Projects',
    img: web5,
    link: "/Project"
  },
  {
    id: 3,
    name: 'About',
    img: web6,
    link: "/About"
  },
  {
    id: 4,
    name: 'Contact',
    img: contact,
    link: "/Contact"
  },
  {
    id: 5,
    name: 'Experience',
    img: plane,
    link: "https://3dplane-chrisuche.vercel.app/"
  },
];
  return (<>
      <NavBar />
      <div className={` ${isMenuOpen ? 'menu-open opacity-50' : ''}`} style={{ transform: isMenuOpen ? '' : '' }}>
      <AnimatePresence >
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      </div>
      <m.div className="flex flex-col justify-end items-center">
        <m.button
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: [, isMenuOpen ? 0.90 : 1] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          whileHover={{ scale: 1.1, transition: { duration: 0, ease: "easeInOut" } }}
          className={`z-30 shadow-zinc-900 fixed bottom-8 transform transition-transform w-12 h-12 flex justify-center items-center bg-[#802200] hover:bg-opacity-80 hover:ease-in md:w-20 md:h-20 rounded-full`}
          onClick={handleButtonClick}
        >
          <GiHamburgerMenu size={20} className='z-30 text-stone-800  '/>
          
        </m.button>
      </m.div>

      <Drawer className=' overflow-hidden flex z-10' open={isMenuOpen} onClose={handleButtonClick} direction='top'>
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
                dragConstraints={{ right:380, left: -480 }}
                id='slider' 
                className='flex justify-around  rounded-t-md gap-8 transition-all w-full h-full overflow-hidden '>
                {data.map((item) => (
                // Use the conditional check to open "Experience" link in a new tab
                <div className='  w-[200px] relative rounded-md' key={item.id}>
                  <div className="text-center pt-2">
                    <p className="text-lg font-bold">{item.name}</p>
                  </div>
                  {item.link === "https://3dplane-chrisuche.vercel.app/" ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        width={237}
                        height={181}
                        src={item.img}
                        className='hover:scale-105 duration-300 cursor-pointer ease-in-out rounded-md'
                        alt=''
                        objectFit="contain"
                      />
                    </a>
                  ) : (
                    <Link href={item.link}>
                      <a onClick={handleLinkClick}>
                        <Image
                          width={237}
                          height={181}
                          src={item.img}
                          className='hover:scale-105 duration-300 cursor-pointer ease-in-out rounded-sm'
                          alt=''
                          objectFit="contain"
                        />
                      </a>
                    </Link>
                  )}
                </div>
              ))}
              </m.div>
              {/* <MdChevronRight onClick={slideRight} size={40} className='z-30' /> */}
            </m.div>
          )}
        </m.div>
        </Drawer>
  </>
      
    )
    
}

export default MyApp
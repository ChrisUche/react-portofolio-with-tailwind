import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import NavBar from './components/homepage/NavBar'
//import { motion as m } from "framer-motion";
//import { useState } from 'react';
//import Link from 'next/link';
//import deved from "/public/dev-ed-wave.png";
//import Image from "next/image";
// import { useRouter } from 'next/router';


function MyApp({ Component, pageProps, router }) {
 // const [isMenuOpen, setMenuOpen] = useState(false);
//  const router = useRouter();

//  const handleLinkClick = () => {
//    setMenuOpen(false);
//  };
  
    // const handleButtonClick = () => {
    //   setMenuOpen(!isMenuOpen);
    // };
  return (<>
      <NavBar />
      <AnimatePresence >
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      {/* <m.button
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
          
          exit={{opacity:0}}
         className={` z-10 fixed inset-0 items-center justify-center  w-full  transition-transform 
          ${isMenuOpen ? 'menu-open flex items-center justify-center text-center' : 'scale-90 transform -translate-y-72 opacity-50'} `}>
          {isMenuOpen  && ( 
            <div className='p-10'>
                
                <div className="flex justify-around  p-6 rounded-t-md gap-5 transition-all">
                  <Link href="/" passHref>
                      <div className='bg-slate-800 aspect-auto hover:cursor-pointer' onClick={handleLinkClick}> <h2 className="text-xl font-bold text-yellow-400">Home</h2></div>
                  </Link>
                  <Link href="Project" passHref>
                      <div onClick={handleLinkClick}> <Image width={237}
                              height={181} src={deved}   className=' hover:cursor-pointer ' />Work</div>
                  </Link>
                  <Link href="/About" passHref>
                      <div className='bg-slate-800 aspect-auto hover:cursor-pointer' onClick={handleLinkClick}> <h2 className="text-xl font-bold text-yellow-400">About</h2></div>
                  </Link>
                  <Link href="/Contact" passHref>
                      <div className='bg-slate-800 aspect-auto hover:cursor-pointer' onClick={handleLinkClick}> <h2 className="text-xl font-bold text-yellow-400">Contact</h2></div>
                  </Link>
                <div className=' aspect-auto hover:cursor-pointer'> <h2 className="text-xl font-bold text-yellow-400">Menu Item 4</h2>
                    <Image width={237}
                        height={181} src={deved}   className='' /></div>

                </div>
                

            </div>


          )}
        </m.div> */}
  </>
      
    )
    
}

export default MyApp

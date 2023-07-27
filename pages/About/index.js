import React from 'react'
import  ServiceBody  from '../components/homepage/ServiceBody';
import  ServiceIntro  from '../components/homepage/ServiceIntro';
import { motion as m } from "framer-motion";


const About = () => {
  return (
    <>
    <m.div 
        initial={{y: "100%", opacity:0}} 
        animate={{y:0, opacity:1}}
        exit={{opacity:0}}
        transition={{duration: 2, ease:"easeOut"}}
        className='px-16'>
            <ServiceIntro/>
            <ServiceBody/>
    </m.div>
    </>
  )
}

export default About
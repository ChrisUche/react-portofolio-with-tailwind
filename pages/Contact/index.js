import React from 'react';
import ServiceBody from '../components/homepage/ServiceBody'
import { Profile } from '../components/homepage/Profile';
import { motion as m } from "framer-motion";



const ContactPage = () => {
  return (
    <m.main
    initial={{y: "100%"}} 
    animate={{y: "0%"}} 
     transition={{duration:1, ease: "easeOut"}}
     className=" bg-slate-800 dark:bg-gray-900  ">
        <section className="min-h-screen">

          <Profile/>
      
        </section>
      </m.main>
  );
};

export default ContactPage;

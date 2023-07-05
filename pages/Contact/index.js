import React from 'react';
import ServiceBody from '../components/homepage/ServiceBody'
import { Profile } from '../components/homepage/Profile';
import { motion as m } from "framer-motion";
import Contact from '../components/homepage/Contact';



const ContactPage = () => {
  return (
    <m.main
      initial={{y: "100%", opacity:0}} 
      animate={{y:0, opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 2, ease:"easeOut"}}
     className="   ">
        <section className="min-h-screen">

          <Contact/>
      
        </section>
      </m.main>
  );
};

export default ContactPage;

import React from 'react'
import Image from "next/image";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";
import { motion as m } from "framer-motion";


export function PortfolioBody() {
  return (
    <m.div 
      initial={{y: "100%", opacity:0}} 
      animate={{y:0, opacity:1}}
      exit={{opacity:0}}
      transition={{duration: 2, ease:"easeOut"}}
      className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </m.div>
  );
};

import React from 'react';
import Image from 'next/image';
import web1 from '/public/web1.png';
import web2 from '/public/web2.png';
import web3 from '/public/web3.png';
import web4 from '/public/web4.png';
import web5 from '/public/web5.png';
import web6 from '/public/web6.png';
import { motion as m } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioBody() {
  return (
    <m.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="flex flex-col gap-10 py-10 px-16 lg:flex-row lg:flex-wrap"
    >
      <Link href={'https://carshowcase-ox6b.vercel.app/'}>
        <div className="basis-1/3 relative flex-1 hover:cursor-pointer">
          <div className="flex z-10 absolute justify-between mb-1 hover:cursor-pointer">
            <button className='bg-green-600 rounded-md p-2 '>
              View site
            </button>
            <button className='bg-amber-300 rounded-md p-2 '>
              Code repo
            </button>
          </div>
        

          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={web1}
            alt=""
          />
        </div>
      </Link>

      <div className="basis-1/3 flex-1 hover:cursor-pointer">
        <Image
          className="rounded-lg object-cover"
          width={'100%'}
          height={'100%'}
          layout="responsive"
          src={web2}
          alt=""
        />
      </div>
      <div className="basis-1/3 flex-1 hover:cursor-pointer">
        <Image
          className="rounded-lg object-cover"
          width={'100%'}
          height={'100%'}
          layout="responsive"
          src={web3}
          alt=""
        />
      </div>
      <div className="basis-1/3 flex-1 hover:cursor-pointer">
        <Image
          className="rounded-lg object-cover"
          width={'100%'}
          height={'100%'}
          layout="responsive"
          src={web4}
          alt=""
        />
      </div>
      <div className="basis-1/3 flex-1 hover:cursor-pointer">
        <Image
          className="rounded-lg object-cover"
          width={'100%'}
          height={'100%'}
          layout="responsive"
          src={web5}
          alt=""
        />
      </div>
      <div className="basis-1/3 flex-1 hover:cursor-pointer">
        <Image
          className="rounded-lg object-cover"
          width={'100%'}
          height={'100%'}
          layout="responsive"
          src={web6}
          alt=""
        />
      </div>
    </m.div>
  );
}

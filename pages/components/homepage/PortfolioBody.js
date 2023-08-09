import React, { useState } from 'react';
import Image from 'next/image';
import web1 from '/public/web1.png';
import web2 from '/public/web2.png';
import web3 from '/public/web3.png';
import web4 from '/public/web4.png';
import web5 from '/public/web5.png';
import web6 from '/public/web6.png';
import car from '/public/carsite.png';
import plane from "/public/plane.png";
import loan from "/public/loan.png";
import dashboard from "/public/dashboard.png";
import todo from "/public/todo.png";
import contactlist from "/public/contactlist.png";

import { motion as m } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioBody() {
    // Define the isPhoneScreen variable and set its initial value
    const [isPhoneScreen, setIsPhoneScreen] = useState(false);
  return (
    <m.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="flex flex-col gap-10 py-10 px-16 lg:flex-row lg:flex-wrap"
    >
        <div className="basis-1/3 relative flex-1 bg-slate-200 hover:cursor-pointer group">
          <div className='flex justify-around p-2'>
            <div className='bg-orange-500 p-1 rounded-md'>React</div>
            <div className='bg-gray-500 p-1 rounded-md'>API</div>
            <div className='bg-cyan-700 p-1 rounded-md'>TypeScript</div>
            <div className='bg-yellow-400 p-1 rounded-md'>Next js</div>
            <div className='bg-green-500 p-1 rounded-md'>Tailwind</div>
          </div>
          <p className='text-xl font-bold font-sans flex justify-center items-center'>Car Rental App</p>
          <Image
            className={`rounded-lg object-cover transition-opacity ${isPhoneScreen ? 'opacity-100' : 'opacity-90'} group-hover:opacity-100`}
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={car}
            objectFit="contain"
            alt=""
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300">
            <div className="flex z-10 justify-between space-x-4">
               <a href={'https://carshowcase-ox6b.vercel.app/'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-green-600 rounded-md p-2 font-bold font-sans text-white'>
                    View site
                  </button>
               </a>
               <a href={'https://github.com/ChrisUche/carshowcase'} target="_blank" rel="noopener noreferrer">
                <button className='bg-amber-300 rounded-md p-2 font-bold font-sans text-white'>
                  Code repo
                </button>
               </a>
            </div>
          </div>
        </div>

        <div className="basis-1/3 relative flex-1 hover:cursor-pointer group">
            <div className='flex justify-around p-2'>
              <div className='bg-orange-500 p-1 rounded-md'>React</div>
              <div className='bg-gray-500 p-1 rounded-md'>Three js</div>
              <div className='bg-yellow-400 p-1 rounded-md'>Three-fiber</div>
              <div className='bg-green-500 p-1 rounded-md'>Tailwind</div>
            </div>
            <p className='text-xl font-bold font-sans flex justify-center items-center'>Plane App</p>
            <Image
              className={`rounded-lg object-cover transition-opacity ${isPhoneScreen ? 'opacity-100' : 'opacity-90'} group-hover:opacity-100`}
              width={'100%'}
              height={'100%'}
              layout="responsive"
              src={plane}
              alt=""
            />

            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300">
              <div className="flex z-10 justify-between space-x-4">
                <a href={'https://3dplane.vercel.app/'} target="_blank" rel="noopener noreferrer">
                    <button className='bg-green-600 rounded-md p-2 font-bold font-sans text-white'>
                      View site
                    </button>
                </a>
                <a href={'https://github.com/ChrisUche/3dplane'} target="_blank" rel="noopener noreferrer">
                    <button className='bg-amber-300 rounded-md p-2 font-bold font-sans text-white'>
                      Code repo
                    </button>
                </a>
              </div>
            </div>
        </div>

        <div className="basis-1/3 relative flex-1 hover:cursor-pointer group">
          <div className='flex justify-around p-2'>
              <div className='bg-orange-500 p-1 rounded-md'>React-Native</div>
              <div className='bg-gray-500 p-1 rounded-md'>Redux</div>
              <div className='bg-green-500 p-1 rounded-md'>Tailwind</div>
          </div>
            <p className='text-xl font-bold font-sans flex justify-center items-center'>Food delivery mobile app </p>
          <Image
            className={`rounded-lg object-cover transition-opacity ${isPhoneScreen ? 'opacity-100' : 'opacity-90'} group-hover:opacity-100`}
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={web4}
            alt=""
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300">
            <div className="flex z-10 justify-between space-x-4">
               <a href={''} target="_blank" rel="noopener noreferrer">
                  <button className='bg-green-600 rounded-md p-2'>
                    View site
                  </button>
               </a>
               <a href={'https://github.com/ChrisUche/deliverymobileapp'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-amber-300 rounded-md p-2 font-bold font-sans text-white'>
                    Code repo
                  </button>
               </a>
            </div>
          </div>
        </div>

        <div className="basis-1/3 relative flex-1 hover:cursor-pointer group">
          <div className='flex justify-around p-2'>
              <div className='bg-orange-500 p-1 rounded-md'>Html</div>
              <div className='bg-gray-500 p-1 rounded-md'>Css</div>
              <div className='bg-green-500 p-1 rounded-md'>JavaScript</div>
          </div>
          <p className='text-xl font-bold font-sans flex justify-center items-center'>Contact List App</p>
          <Image
            className={`rounded-lg object-cover transition-opacity ${isPhoneScreen ? 'opacity-100' : 'opacity-90'} group-hover:opacity-100`}
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={contactlist}
            alt=""
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300">
            <div className="flex z-10 justify-between space-x-4">
               <a href={'https://chrisuche.github.io/contactlistapp.io/'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-green-600 rounded-md p-2 font-bold font-sans text-white'>
                    View site
                  </button>
               </a>
               <a href={'https://github.com/ChrisUche/contactlistapp.io'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-amber-300 rounded-md p-2 font-bold font-sans text-white'>
                    Code repo
                  </button>
               </a>
            </div>
          </div>
        </div>

        <div className="basis-1/3 relative flex-1 hover:cursor-pointer group">
          <div className='flex justify-around p-2'>
                <div className='bg-orange-500 p-1 rounded-md'>Html</div>
                <div className='bg-gray-500 p-1 rounded-md'>Css</div>
                <div className='bg-green-500 p-1 rounded-md'>JavaScript</div>
          </div>
          <p className='text-xl font-bold font-sans flex justify-center items-center'>Loan Calculator </p>
          <Image
            className={`rounded-lg object-cover transition-opacity ${isPhoneScreen ? 'opacity-100' : 'opacity-90'} group-hover:opacity-100`}
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={loan}
            alt=""
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300">
            <div className="flex z-10 justify-between space-x-4">
               <a href={'https://chrisuche.github.io/loancalculator.io/'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-green-600 rounded-md p-2 font-bold font-sans text-white'>
                    View site
                  </button>
               </a>
               <a href={'https://github.com/ChrisUche/loancalculator.io'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-amber-300 rounded-md p-2 font-bold font-sans text-white'>
                    Code repo
                  </button>
               </a>
            </div>
          </div>
        </div>

        <div className="basis-1/3 relative flex-1 hover:cursor-pointer group">
          <div className='flex justify-around p-2'>
                <div className='bg-orange-500 p-1 rounded-md'>React</div>
                <div className='bg-gray-500 p-1 rounded-md'>TypeScript</div>
                <div className='bg-yellow-400 p-1 rounded-md'>Cypress</div>
                <div className='bg-green-500 p-1 rounded-md'>Tailwind</div>
            </div>
            <p className='text-xl font-bold font-sans flex justify-center items-center'>Task app</p>
          <Image
            className={`rounded-lg object-cover transition-opacity ${isPhoneScreen ? 'opacity-100' : 'opacity-90'} group-hover:opacity-100`}
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={todo}
            alt=""
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300">
            <div className="flex z-10 justify-between space-x-4">
               <a href={'https://checklist-todoapp.netlify.app/'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-green-600 rounded-md p-2 font-bold font-sans text-white'>
                    View site
                  </button>
               </a>
               <a href={'https://github.com/ChrisUche/task-app'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-amber-300 rounded-md p-2 font-bold font-sans text-white'>
                    Code repo
                  </button>
               </a>
            </div>
          </div>
        </div>

        <div className="basis-1/3 relative flex-1 bg-slate-200 hover:cursor-pointer group">
          <div className='flex justify-around p-2'>
                <div className='bg-orange-500 p-1 rounded-md'>Html</div>
                <div className='bg-gray-500 p-1 rounded-md'>Css</div>
                <div className='bg-green-500 p-1 rounded-md'>JavaScript</div>
          </div>
          <p className='text-xl font-bold font-sans flex justify-center items-center'>ResponsiveAdminDashboard</p>
          <Image
            className={`rounded-lg object-cover transition-opacity ${isPhoneScreen ? 'opacity-100' : 'opacity-90'} group-hover:opacity-100`}
            width={'100%'}
            height={'100%'}
            layout="responsive"
            src={dashboard}
            alt=""
          />

          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-300">
            <div className="flex z-10 justify-between space-x-4">
               <a href={'https://chrisuche.github.io/ResponsiveAdminDashboard.github.io/'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-green-600 rounded-md p-2 font-bold font-sans text-white'>
                    View site
                  </button>
               </a>
               <a href={'https://github.com/ChrisUche/ResponsiveAdminDashboard.github.io'} target="_blank" rel="noopener noreferrer">
                  <button className='bg-amber-300 rounded-md p-2 font-bold font-sans text-white'>
                    Code repo
                  </button>
               </a>
            </div>
          </div>
        </div>
    </m.div>
  );
}

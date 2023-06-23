import React from 'react'
import Image from "next/image";
import code from "/public/code.png";
import design from "/public/design.png";
import consulting from "/public/consulting.png";

export function ServiceBody() {
  return (
    <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
  );
};

// import { useState } from 'react';

// export function ServiceBody() {
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);

//   const handleMouseMove = (e) => {
//     const rect = e.target.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     setMouseX(x);
//     setMouseY(y);
//   };

//   return (
//     <div className="bg-black h-screen flex items-center justify-center">
//       <div className="flex flex-wrap gap-8 max-w-screen-lg w-full" id="cards" onMouseMove={handleMouseMove}>
//         <div className="bg-slate-700 h-60 w-72 rounded-md cursor-pointer relative">
//           <div className="hover:opacity-100"></div>
//           <div className="card-content"></div>
//         </div>
//         <div className="bg-slate-700 h-60 w-72 rounded-md cursor-pointer relative">
//           <div className="hover:opacity-100"></div>
//           <div className="card-content"></div>
//         </div>
//         <div className="bg-slate-700 h-60 w-72 rounded-md cursor-pointer relative">
//           <div className="hover:opacity-100"></div>
//           <div className="card-content"></div>
//         </div>
//         <div className="bg-slate-700 h-60 w-72 rounded-md cursor-pointer relative">
//           <div className="hover:opacity-100"></div>
//           <div className="card-content"></div>
//         </div>
//         <div className="bg-slate-700 h-60 w-72 rounded-md cursor-pointer relative">
//           <div className="hover:opacity-100"></div>
//           <div className="card-content"></div>
//         </div>
//         <div className="bg-slate-700 h-60 w-72 rounded-md cursor-pointer relative">
//           <div className="hover:opacity-100"></div>
//           <div className="card-content"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

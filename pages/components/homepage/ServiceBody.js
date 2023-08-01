import React from 'react';
import Image from 'next/image';
import code from '/public/code.png';
import design from '/public/design.png';
import consulting from '/public/consulting.png';

export default function ServiceBody() {
  return (
    <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={code} width={100} height={100} alt="Code your dream project" />
        <h4 className="py-4 text-teal-600">Proficient in</h4>
        <p className="text-gray-800 py-1">React</p>
        <p className="text-gray-800 py-1">React-Native</p>
        <p className="text-gray-800 py-1">TypeScript</p>
        <p className="text-gray-800 py-1">Next js</p>
        <p className="text-gray-800 py-1">Tailwind</p>
        <p className="text-gray-800 py-1">Redux</p>
        <p className="text-gray-800 py-1">Git</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={design} width={100} height={100} alt="Beautiful Designs" />
        <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Visuals</h3>
        <p className="py-2">
          Creating data driven visuals.
        </p>
        <h4 className="py-4 text-teal-600">Data Visualization Tools I Use</h4>
        <p className="text-gray-800 py-1"> Power BI</p>
        <p className="text-gray-800 py-1">MS Excel</p>
        <p className="text-gray-800 py-1">PowerPoint</p>
      </div>
    </div>
  );
}



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

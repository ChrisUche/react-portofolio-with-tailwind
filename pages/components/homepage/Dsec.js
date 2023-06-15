import React from 'react'
import { useState } from 'react';

export  function Dsec() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const handleButtonClick = () => {
      setMenuOpen(!isMenuOpen);
    };
  return (
    <>
    <div>
        {isMenuOpen && (
            <div className="flex justify-around bg-black p-6 rounded-t-md h-1/2 w-full transform -translate-y-56">
              <div className='bg-slate-800 w-28 h-28'> </div>
              <h2 className="text-xl font-bold text-gray-800">Menu Item 1</h2>
              <h2 className="text-xl font-bold text-gray-800">Menu Item 2</h2>
              <h2 className="text-xl font-bold text-gray-800">Menu Item 3</h2>
            </div>
          
        )}
    </div>
  </>
  )
}

import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";



export function NavBar() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbychris</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="hover:text-opacity-80 cursor-pointer bg-gradient-to-r from-cyan-500  to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="http:///C:/Users/Uche%20Chris/Downloads/Uche%20Chris%20FrontEnd%20Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
  );
};


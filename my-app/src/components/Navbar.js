import React from "react";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
export default function Navbar(){
    return(
        <nav className="bg-deepBlue">
           <div className="relative  w-[1080px] items-center flex flex-row justify-between mx-auto">
            {/* logo */}
            <div className="cursor-Pointer py-7 pr-7">
               <h1 className="font-mullish text-4xl font-bold text-white">Edu Log</h1>
            </div>
             
             {/* middle */}
            
                <ul className=" flex flex-row space-x-6">
                    <li className="text-white font-mullish py-7 hover:opacity-70 cursor-pointer transition-all duration-200 relative group">
                        <a href="#">Home</a>
                        <div className="absolute bottom-0 w-full h-1 bg-greenLight hidden group-hover:block transition-all duration-200"></div>
                    </li>
                    <li className="text-white font-mullish py-7 hover:opacity-70 cursor-pointer transition-all duration-200 relative group">
                        <a href="#">Institutions</a>
                        <div className="absolute bottom-0 w-full h-1 bg-greenLight hidden group-hover:block transition-all duration-200"></div>
                    </li>
                    <li className="text-white font-mullish py-7 hover:opacity-70 cursor-pointer transition-all duration-200 relative group">
                        <a href="#">Employers</a>
                        <div className="absolute bottom-0 w-full h-1 bg-greenLight hidden group-hover:block transition-all duration-200"></div>
                    </li>
                    <li className="text-white font-mullish py-7 hover:opacity-70 cursor-pointer transition-all duration-200 relative group">
                        <a href="#">About us</a>
                        <div className="absolute bottom-0 w-full h-1 bg-greenLight hidden group-hover:block transition-all duration-200"></div>
                    </li>
                    <li className="text-white font-mullish py-7 hover:opacity-70 cursor-pointer transition-all duration-200 relative group">
                        <a href="#">Blogs</a>
                        <div className="absolute bottom-0 w-full h-1 bg-greenLight hidden group-hover:block transition-all duration-200"></div>
                    </li>
                    
                </ul>
            

            {/* login */}
            <div className="flex ">
               <button className=" bg-white py-2 px-7 font-mullish text-deepBlue border rounded-sm text-sm font-bold space-x-10  hover:opacity-90 flex flex-row">Login
               {/* <FontAwesomeIcon icon={faDiagramProject} className="" /> */}
               <svg 
                            viewBox="0 0 24 24"
                            focusable="false"
                            class="w-[20px] h-[20px] "
                            >
                            <path
                            fill="currentColor"
                            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                            >

                            </path>
                    </svg>
               </button>
               
            </div>
          </div>
        </nav>
        
    )
}
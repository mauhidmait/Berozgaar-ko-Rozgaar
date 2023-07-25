import Button from './Button'
import React, { useState } from "react";

import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
export default function Navbar(){
    let Links=[
        {name:"Home",link:"/"},
        {name:"Institutions",link:"/"},
        {name:"Employers",link:"/"},
        {name:"About us",link:"/"},
        {name:"Blogs",link:"/"}
    ];
    let[open,setOpen]=useState(false);
    return(
        <nav className="shadow-md w-full fixed top-0 left-0 ">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                    <span className=" text-3xl text-indigo-600 mr-1 pt-2">
                    <ion-icon name="magnet-outline"></ion-icon>
                    </span>
                    Edu Log 
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                <ion-icon name={open?'close':'menu'}></ion-icon>
                {/* <ion-icon name="close-outline"></ion-icon> */}
                </div>
                <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-white  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ?'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={link.link} className="text-gray-800 hover:text-gray-400 transition-all duration-200">{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>
                        Log in 
                    </Button>
                </ul>

            </div>

        </nav>


           
        
    )
}
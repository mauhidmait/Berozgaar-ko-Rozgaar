import React, { Component } from 'react'
import Image1 from './Images/image.png'

export default class Hero extends Component {
  render() {
    return (
      <div className='relative bg-white pb-10'>
        <div className='w-[85%] max-w-[1250px] flex flex-row justify-between mx-auto relative'>
            {/* left  */}
            <div className='space-y-9 mt-5'>
                <h1 className='font-mullish font-bold text-[60px] leading-[1.3] text-deepBlue'>
                    <span className='text-[#47A992]'> Building</span> Careers,
                    <br /> <span className='text-[#47A992]'>Digitizing</span> Campuses, <br />
                    <span className='text-[#47A992]'>Revolutionizing</span> Recruitments</h1>
                <p className='font-mullish text-[20px] leading-7 text-black opacity-70 w-[80%]'>The fastest growing career development platform that brings together academia, companies, students, and alumni in a single place to collaborate and grow.</p>
                <div className='flex flex-row  space-x-20 w-full'>
                    {/* left div  */}
                   <div className='flex flex-col space-y-3' >
                    <h2 className='font-mullish font-bold text-deepBlueHead text-2xl'>For Employers</h2>
                    <button className='bg-[#47A992] border rounded-[6px] text-deepBlue pt-3 pb-3 pl-4 pr-4 font-mullish font-bold hover:opacity-95 hover:scale-90 transition-all duration-200 flex flex-row items-center'>Champion Your Recruitments
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
                   {/* right div  */}
                   <div className='flex flex-col space-y-3'>
                      <h2 className='font-mullish font-bold text-deepBlueHead text-2xl '>For Institutions</h2>
                      <button className='text-[#47A992] border rounded-[6px] bg-deepBlue pt-3 pb-3 pl-4 pr-4 font-mullish font-bold hover:opacity-95 hover:scale-90 transition-all duration-200 flex flex-row items-center'>Digitize Your Campus
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
                
            </div>
            {/* right  */}
            <div className=' bg-lightGray w-full rounded-md mt-9 ml-[85px] mb-3 '>
                <img src={Image1}alt=""  className=' rounded-md absolute right-0 bottom-0'/>
            </div>
        </div>
      </div>
    )
  }
}

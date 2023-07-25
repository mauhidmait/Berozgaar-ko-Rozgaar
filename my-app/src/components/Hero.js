import React, { Component } from 'react'
import Image1 from './Images/heroImage.png'

export default class Hero extends Component {
  render() {
    return (
      <div className='relative mt-20 bg-gradient-to-t from-[#ccd7e4] to-[#ffffff] pb-10 -z-[1]'>
        <div className='w-[85%]  flex flex-col lg:flex-row justify-between mx-auto relative transition-all duration-200 ease-in'>
            {/* left  */}
            <div className='space-y-9 mt-10'>
                <h1 className=' font-bold text-[45px] sm:text-[60px] leading-[1.3] text-deepBlue transition-all duration-200 ease-in'>
                    <span className='text-[#47A992]'>Building</span> Careers,
                    <br /> <span className='text-[#47A992]'>Digitizing</span> Campuses, <br />
                    <span className='text-[#47A992]'>Revolutionizing</span> Recruitments</h1>
                <p className=' text-[20px] leading-7 text-black opacity-70 w-[85%] sm:w-[80%] transition-all duration-200 ease-in'>The fastest growing career development platform that brings together academia, companies, students, and alumni in a single place to collaborate and grow.</p>
                <div className='flex flex-row  space-x-20 w-full'>
                    {/* left div  */}
                   <div className='flex flex-col space-y-3' >
                    <h2 className=' font-bold text-deepBlueHead text-2xl'>For Employers</h2>
                    <button className=' text-white text-[10px] md:text-[16px] bg-gradient-to-r from-[#9181F4] to-[#5038ED] border rounded-[6px] text-deepBlue pt-3 pb-3 pl-4 pr-4  font-bold hover:opacity-95 hover:scale-90 transition-all duration-200 ease-in flex flex-row items-center'>Champion Your Recruitments
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
                      <h2 className='font-bold text-deepBlueHead text-2xl'>For Institutions</h2>
                      <button className=' text-white text-[10px] md:text-[16px] bg-gradient-to-r from-[#9181F4] to-[#5038ED] border rounded-[6px] bg-deepBlue pt-3 pb-3 pl-4 pr-4  font-bold hover:opacity-95 hover:scale-90 transition-all duration-200 ease-in flex flex-row items-center'>Digitize Your Campus
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
            <div className=' w-full rounded-md lg:mt-5  lg:mb-3 transition-all duration-200 ease-in'>
                <img src={Image1}alt=""  className=' rounded-md relative lg:absolute lg:right-0 lg:bottom-12 -left[60px] mt-20 mr-50 sm:-left[200px] transition-all duration-200 ease-in'/>
            </div>



            {/* yaha se  */}

                 


            {/* yaha tak  */}
        </div>
      </div>
    )
  }
}

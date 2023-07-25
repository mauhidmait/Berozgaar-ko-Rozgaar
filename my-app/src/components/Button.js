import React from 'react'

const Button = (props) => {
  return (
    <button className='flex items-center bg-gradient-to-r from-[#9181F4] to-[#5038ED] text-white py-2 px-6 rounded md:ml-8 hover:opacity-80 transition-all duration-200'>
       {props.children}
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
  )
}

export default Button


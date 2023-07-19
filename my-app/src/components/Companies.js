import React, { Component } from 'react'
import comanies from './Images/comanies.png'

import './Companies.css'
export default class Companies extends Component {
  render() {
    return (
      <div className='bg-[#f5f8fe] relative pt-40 pb-12 -z-[10] -mt-[100px]'>
          <div className='w-[85%] max-w-[1250px] relative mx-auto flex flex-row justify-between items-center'>
            {/* left  */}
            <div>
               <h2 className='font-mullish font-bold text-5xl text-deepBlueHead'>Trusted by Industry</h2>
            </div>

            {/* right  */}
            <div className='overflow-y-hidden relative h-[500px] w-[500px] '>
                <div className="absolute w-full h-[150px] top-0 z-50 blurring-top"></div>
                <img src={comanies} alt="" className='absolute w-full object-cover companiesList'/>
                <div className='absolute w-full h-[150px] bottom-0 z-50 blurring-bottom'></div>
            </div>
            
          </div>
      </div>
    )
  }
}

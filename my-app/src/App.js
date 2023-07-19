import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Companies from './components/Companies'

export default function App() {
  return (
    <div className='overflow-x-hidden'>
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Companies></Companies>

    </div>
  )
}

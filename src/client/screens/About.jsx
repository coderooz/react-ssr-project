import React from 'react'
import NavBar from './NavBar';

const About = () => {
  return (
    <div className='flex w-screen h-screen flex-col'>
      <NavBar/>
      <div className='flex-1 flex-col bg-black justify-center items-center px-10 w-full'>  
        <h1 className='text-white font-bold text-2xl'>About</h1>
        <p className='text-base text-white'>This content is rendered on the server.</p>
      </div>
    </div>
  )
}

export default About;

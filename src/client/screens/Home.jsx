import React from 'react';
import NavBar from './NavBar';
const Hero = () => {
  return (
    <div className='flex w-screen h-screen flex-col'>
      <NavBar/>
      <div className='flex-1 flex-col bg-black justify-center items-center px-10 w-full'>  
        <h1 className='text-white font-bold text-2xl'>Home</h1>
        <p className='text-base text-white'>Welcome to the home page</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <section className=''>     
      <Hero/>
    </section>
  );
}

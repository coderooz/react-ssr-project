// src/client/screens/Blog.jsx
import React, { Suspense } from 'react';
import NavBar from './NavBar';

const Blog = () => (
    <div className='flex w-screen h-screen flex-col'>
      <NavBar/>
      <div className='flex-1 flex-col bg-black justify-center items-center px-10 w-full'>  
        <h1 className='text-white font-bold text-2xl'>Blog</h1>
        <p className='text-base text-white'>This content is rendered on the server.</p>
        <Suspense fallback={<div>Loading interactive content...</div>}>
          <p className='text-base text-white'>
            Lourae ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec 
            purus ut libero fermentum varius. Nulla facilisi. Nullam nec purus ut
            libero fermentum varius. Nulla facilisi. Nullam nec purus ut libero
            fermentum varius. Nulla facilisi. Nullam nec purus ut libero fermentum
          </p>
        </Suspense>
      </div>
    </div>
);

export default Blog;

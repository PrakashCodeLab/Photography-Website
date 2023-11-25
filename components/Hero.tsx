import React from 'react';

type HeroProps={
  heading: string;
  msg:string;
}

const Hero = ({heading , msg}:HeroProps) => {
  return (
    <div className='flex items-center justify-center h-screen mb-10  bg-fixed bg-cover  custom-img'>
      <div  className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold font-serif capitalize'>{heading}</h2>
        <p className='py-5 font-mono text-xl capitalize tracking-wider leading-8 max-w-[400px]'>{msg}</p>
        <button className='px-8 py-2 border font-mono capitalize'>book</button>
      </div>
    </div>
  );
}

export default Hero;

import React from 'react';

const Footer = () => {
    const newYear = new Date().getFullYear();
  return (
    <footer className='flex justify-center items-center max-w-[1240px] mx-auto  mt-5 border-t-[0.05rem] border-gray-100 p-[2rem]'>
       <p className=' text-[1.5rem] text-gray-500  font-normal'><span>{newYear}</span>&copy;All rights reserved</p>
    </footer>
  );
}

export default Footer;

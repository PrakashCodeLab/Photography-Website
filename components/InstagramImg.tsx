"use client";
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { FaSquareInstagram } from "react-icons/fa6";

type ImgProps = {
  SocialImg : StaticImageData;
}


const InstagramImg = ({SocialImg}:ImgProps) => {

    const [showblock , setShowBlock] = useState(false);
  return (
    <div className='relative ' onMouseEnter={()=> setShowBlock(true)} onMouseLeave={()=> setShowBlock(false)}>
      <div className='w-[300px] h-[300px] '>
      <Image className='w-full h-full object-cover rounded-xl'   src={SocialImg} alt="/" />
      </div>
     

      {/* overlay */}
      {showblock && (
         <div className='flex items-center  justify-center absolute  top-0 left-0 right-0 bottom-0 hover:bg-black/50 w-[300px] h-[300px] rounded-xl'>
             <p className=' text-gray-300 '>
             <FaSquareInstagram className='z-20' size={30} />
             </p>
         </div>
      )}
     
    </div>
  );
}

export default InstagramImg;

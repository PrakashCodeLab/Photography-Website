import React from 'react';
import InstagramImg from './InstagramImg';
import img1 from '@/public/pic1.jpg';
import img2 from '@/public/pic2.jpg';
import img3 from '@/public/pic3.jpg';
import img4 from '@/public/pic4.jpg';
import img5 from '@/public/pic5.jpg';
import img6 from '@/public/pic6.jpg';
const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto flex justify-center items-center flex-col text-center py-24'>
     <p className='text-3xl text-cyan-500  font-bold '>Follow me on instagram</p>
     <p className='pb-4 text-red-600 pt-5 text-[1rem] font-light'>@Capture</p>
     <div className='grid justify-self-center grid-cols-2  max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
        <InstagramImg SocialImg={img1}/>
        <InstagramImg SocialImg={img2}/>
        <InstagramImg SocialImg={img3}/>
        <InstagramImg SocialImg={img3}/>
        <InstagramImg SocialImg={img4}/>
        <InstagramImg SocialImg={img5}/>
        <InstagramImg SocialImg={img6}/>
     </div>
    </div>
  );
}

export default Instagram;

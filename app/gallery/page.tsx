import Hero from '@/components/Hero';
import React from 'react';
import img1 from '@/public/pic1.jpg';
import img2 from '@/public/pic2.jpg';
import img3 from '@/public/pic3.jpg';
import img4 from '@/public/pic4.jpg';
import img5 from '@/public/pic5.jpg';
import img6 from '@/public/pic6.jpg';
import img7 from '@/public/gal-1.jpg';
import img8 from '@/public/gal-2.jpg';
import img9 from '@/public/gal-3.jpg';
import img10 from '@/public/gal-4.jpg';
import img11 from '@/public/gal-5.jpg';
import img12 from '@/public/gal-6.jpg';
import InstagramImg from '@/components/InstagramImg';

const Gallerypage = () => {
  return (
    <div>
     <Hero heading={'Gallery'} msg={'Welcome to our gallery! Here you can find a collection of our amazing images showcasing various moments and experiences.'}/>

     <div className='flex justify-center items-center '>
      <h2 className='font-extrabold text-cyan-500  text-[5rem] capitalize '>my gallery </h2>
     </div>
     <div className='flex justify-center items-center '>
     <div className='max-w-[1240px] mx-auto text-center py-24 grid  max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
     <InstagramImg SocialImg={img1}/>
     <InstagramImg SocialImg={img5}/>
     <InstagramImg SocialImg={img4}/>
     <InstagramImg SocialImg={img2}/>
     <InstagramImg SocialImg={img12}/>
     <InstagramImg SocialImg={img10}/>
     <InstagramImg SocialImg={img7}/>
     <InstagramImg SocialImg={img6}/>
     <InstagramImg SocialImg={img3}/>
     <InstagramImg SocialImg={img9}/>
     <InstagramImg SocialImg={img8}/>
     <InstagramImg SocialImg={img11}/>
    
     </div>
     </div>
     
     
    </div>
  );
}

export default Gallerypage;

import Image from 'next/image';
import React from 'react';

const Portfoliapage = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your profile picture
            alt="Profile"
            className="rounded-lg shadow-md"
            width={200} 
            height={200}

          />
        </div>
        <div>
          <p className="text-lg text-gray-700">
            I am passionate about capturing life moments through the lens. My journey in photography started several years ago when I discovered the beauty of freezing moments in time. 
          </p>
          <p className="text-lg text-gray-700 mt-4">
            With a keen eye for detail and a love for natural light, I specialize in portrait and landscape photography. I strive to evoke emotions and tell stories through my photographs.
          </p>
        </div>
      </div>
    </div>
  </div>
  ); 
}

export default Portfoliapage;

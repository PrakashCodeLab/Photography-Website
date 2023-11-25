import Hero from '@/components/Hero';
import React from 'react';

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Hero heading={'contact me'} msg={"Feel free to drop us a message with any inquiries or feedback you may have. We're here to assist you!"}/>
      {children}
    </div>
  );
}

export default layout;

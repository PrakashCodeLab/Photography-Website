import Hero from '@/components/Hero';
import React from 'react';

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Hero heading={'my portfolia'} msg={"I am passionate about capturing lifes moments through the lens. My journey in photography started several years ago when I discovered the beauty of freezing moments in time."}/>
      {children}
    </div>
  );
}

export default layout;

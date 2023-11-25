import Hero from '@/components/Hero'
import Instagram from '@/components/Instagram';
import Silder from '@/components/Silder';

import {SlideDataImages} from '@/components/SliderData';

export default function Home() {
  return (
    <div>
      <Hero  
           heading="capture photography" 
            msg="i capture moments in nature and keep them alive." />
      <Silder SliderData={SlideDataImages}/>
      <Instagram />

    </div>

  )
}

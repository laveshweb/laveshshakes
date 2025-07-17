import React, { useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css';
import Smooth from './sections/Smooth'
import gsap from 'gsap'
import { ScrollTrigger  } from 'gsap/all';
import FlavorSection from './sections/FlavorSection';
import Nu from './sections/Nu';
import Roll from './sections/Roll';
import Testi from './sections/Testi';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger )

const App = () => {

  return (
   <main>
   <Navbar/>

    <Hero/>
<Smooth/>
<FlavorSection/>
<Nu/>
<div>

<Roll/>
<Testi/>
</div>
   <Footer/>
    
   </main>
  )
}

export default App
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import React from 'react'
import gsap from 'gsap'


const Hero = () => {
    useGSAP(() =>{
const titlesplit = SplitText.create(".hero-title" , {
    type : "chars",
});
const tl = gsap.timeline({
    delay : 1,
});
tl.to(".hero-content" , {
    opacity : 1,
    y: 0,
    ease : "power1.inOut"
}).to(".hero-text-scroll" , {
    duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
}, "-=0.5")
.from(titlesplit.chars, {
    yPercent : 200,
    stagger : 0.02,
    ease : "power2.out",

}, "-=0.5");

const heroTl = gsap.timeline({
    scrollTrigger:{
        trigger : ".hero-container",
        start : "1%  start",
        end : "bottom top",
        scrub : true,

        },
});
heroTl.to(".hero-container" , {
    rotate : 7,
    scale : 0.9,
    yPercent : 30,
    ease : "power1.inOut"
})
    });
  return (
   <section className='border-main-bg '>
    <div className='hero-container'>
{/* <img src="public\images\static-img.png" alt="HERO-img" className='absolute bottom-0 left-1/2 -translate-x-1/2  object-auto scale-100 md:scale-150' /> */}
    <div className='hero-content opacity-0  relative md:top-4 top-[20%]'>
        <div className='overflow-visible'>
            <h1 className='hero-title '>Freaking Delicious</h1>
        </div>
        <div style={{
            // clipPath : 'polygon(50% ,0, 50%,0, 100%, 50%, 100%)',
        }} className="hero-text-scroll relative  bottom-[10px]">
            <div className='hero-subtitle'>    <h1 >Protien + Caffine</h1></div>
        </div>
        <div className=''><h2>Live life to the fullest  with SPYLT: Shatter boredom and embrace
        your inner kid with every deliciously smooth chug.</h2>
        </div>  
        <div className="hero-button cursor-pointer">
            <p>Chug a Aplite</p>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Hero
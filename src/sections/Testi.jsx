import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Testi = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const h1Elements = containerRef.current?.querySelectorAll('h1');
    if (h1Elements && h1Elements.length > 0) {
      gsap.from(h1Elements, {
        y: 150,               // Start 150px below
        opacity: 0,           // Start invisible
        scale: 0.95,          // Slight zoom in
        stagger: 0.4,         // Each h1 comes one after another
        duration: 0.5,
        ease: "power4.out",   // Smooth ease
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",   // Start animation when top of div is at 80% of viewport
          toggleActions: "play none none reverse", // Play on scroll down, reverse on up
        },
      });
    }
    
  }, { scope: containerRef });
   
  return (
    <section>
    <div 
      ref={containerRef}
    className=" md:text-[150px] text-[80px]  font-extrabold  col-center relative right-1">
        <h1 className="text-black first-title mb-[-30px] ">What's</h1>
        <h1 className="text-light-brown sec-title mb-[-20px] ">Everyone</h1>
        <h1 className="text-black third-title text-14xl ">Talking</h1>
     </div>
   
   
  </section>
  )
}

export default Testi
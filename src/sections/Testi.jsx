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
    <section className="flex flex-col md:flex-row h-screen">
    {/* Left Side - Text */}
    <div
      ref={containerRef}
      className="md:text-[150px] text-[80px] md:w-1/2 w-full flex flex-col justify-center items-center md:items-start px-6 md:px-12 relative md:left-7 left-0 "
    >
       <h1 className="text-black first-title mb-[-30px]  ">What's</h1>
        <h1 className="text-light-brown sec-title mb-[-20px] ">Everyone</h1>
        <h1 className="text-black third-title text-14xl ">Talking</h1>
    </div>

    {/* Right Side - Video Card */}
    <div className="md:w-1/2 w-full flex justify-center items-center relative md:right-5 -right-2  min-h-[400px] md:mt-4 mt-12">
      <div className="w-[60%] md:w-[55%]  ">
        <video
          className="w-full md:h-[580px] h-[450px] rounded-3xl shadow-xl border-2 border-gray-300 transition-transform duration-300 hover:scale-105 object-cover "
          src="public\videos\f7.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  </section>
  )
}

export default Testi
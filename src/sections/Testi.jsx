import React, { useRef } from 'react'
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Testi = () => {
  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-0vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });
  })
  

   
  return (
    <section className="testimonials-section">
    <div className="absolute size-full pt-[5vw] flex flex-col min-h-screen flex-grow ">
        <h1 className="text-black first-title ">What's</h1>
        <h1 className="text-light-brown sec-title text-14xl">Everyone</h1>
        <h1 className="text-black third-title text-14xl z-111">Talking</h1>
     </div>
   
   
  </section>
  )
}

export default Testi
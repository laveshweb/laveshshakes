import React from 'react'
import { useMediaQuery } from "react-responsive";


const Footer = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
      });
    
  return (
    <section className="footer-section">
    <img
      src="/images/footer-dip.png"
      alt=""
      className="w-full object-cover -translate-y-1"
    />

    <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
      <div className="overflow-hidden z-10 ">
        <h1 className="general-title text-center text-milk py-5">
          #CHUGRESPONSIBLY
        </h1>
      </div>

      {isMobile ? (
        <img
          // src="/images/.png"
          className=" top-0 object-contain"
        />
      ) : (
        <video
          src="/videos/splash.mp4"
          autoPlay
          playsInline
          muted
          className="absolute top-0 object-contain mix-blend-lighten"
        />
      )}

      <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
        <div className="social-btn">
          <img src="./images/yt.svg" alt="" />
        </div>
        <div className="social-btn">
          <img src="./images/insta.svg" alt="" />
        </div>
        <div className="social-btn">
          <img src="./images/tiktok.svg" alt="" />
        </div>
      </div>

      <div className="mt-15 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
        <div className="flex items-center md:gap-16 gap-5">
         
         
          <div className='gap-5 text-center flex justify-center items-center  translate-x-14 mb-20'>
            <p>Company</p>
            <p>Contacts</p>
            <p>Tasty Talk</p>
          </div>
        </div>

     
      </div>

     
    </div>
  </section>
  )
}
export default Footer
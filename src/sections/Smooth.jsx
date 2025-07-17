import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const Smooth = () => {

    useGSAP (() =>{
        const firstMessage = SplitText.create(".first-message ", {
            type : "words",
        })
        const  secondMessage = SplitText.create(".second-message ", {
            type : "words",
        })
        const  paraMessage = SplitText.create(".message-content p", {
            type : "words , lines",
            linesClass : "paragraph-line"
        })
        gsap.to(firstMessage.words, {
            color : "#faeade",
            ease : "power1.in",
            stagger : 1,
            scrollTrigger : {
                trigger : ".message-content",
                start : "top center",
                end : "30% center",
                scrub : true,
            }
        });
        gsap.to(secondMessage.words, {
            color : "#faeade",
            ease : "power1.in",
            stagger : 1,
            scrollTrigger : {
                trigger : ".second-message",
                start : "top center",
                end : "bottom center",
                scrub : true,
            }
        });
    const paraTl = gsap.timeline({
        scrollTrigger : {
            trigger : ".message-content p",
            start : "top center",
        }
    })
        paraTl.from(paraMessage.words, {
yPercent : 300,
rotate : 3,
ease : "power1.inOut",
duration : 1,
stagger : 0.01,
        })
  

        
    })
  return (
   <section className="message-content">
    <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
            <div className='msg-wrapper'>
                <h1 className='first-message'>STIR UP YOUR FEARLESS PAST AND</h1>
                <div className="msg-text-scroll">
                    <div className="bg-light-brown md:pb-5 pb-3 px-5"><h2 className='text-red-brown'>Fuel up</h2></div>
                </div>
            <h1 className="second-message">YOUR FUTURE WITH EVERY GULP OF PROTIEN</h1>
            </div>
        <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-x-hidden">
                <p>Rev up your rebel spirit and feed the adventure of life with 
                SPYLT, where you're one chug away from epic nostalgia and 
                                       fearless fun.</p>
            </div>
        </div>
        </div>
    </div>
   </section>
  )
}

export default Smooth
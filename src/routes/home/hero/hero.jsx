import React, { useLayoutEffect } from 'react'
import { useRef } from 'react'
import { gsap, ScrollTrigger, SplitText } from "gsap-trial/all";

export const Hero = () => {

  const textRef1 = useRef()
  const textRef2 = useRef()
  const textRef3 = useRef()

  useLayoutEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger)
    let mySplitText1 = new SplitText(textRef1.current, { type: 'chars'})
    let mySplitText2 = new SplitText(textRef2.current, { type: 'chars'})
    let mySplitText3 = new SplitText(textRef3.current, { type: 'chars'})
    let chars1 =  mySplitText1.chars;
    let chars2 =  mySplitText2.chars;
    let chars3 =  mySplitText3.chars;

    gsap.from(chars1, {
      yPercent: 300,
      stagger: 0.01,
      ease: 'out',
      duration: .7,
    })

    gsap.from(chars2, {
      yPercent: 300,
      stagger: 0.014,
      ease: 'out',
      duration: .9,
    })

    gsap.from(chars3, {
      yPercent: 300,
      stagger: 0.017,
      ease: 'out',
      duration: 1.1,
    })
  }, [])

  return (
    <div className='w-full text-nao-white space-y-12 pt-14'>
      <section className='w-full md:w-1/2'>
        <p className='text-xl w-full md:w-1/2'>
          Visual and Product Designer based in London.
        </p>
      </section>
      <p className='w-full md:w-4/5 text-4xl lg:text-[100px] font-[450px] leading-normal lg:leading-[100px] overflow-hidden flex items-start flex-col'>
        <span ref={textRef1}>A multidisciplinary</span>
        <span ref={textRef2}>designer focusing on</span>
        <span ref={textRef3}>digital experiences.</span>
      </p>
      <article className='w-full flex items-end justify-between'>
      <section className='hidden md:block'>
        <div className='bg-nao-main w-20 h-20 rounded-full flex items-center justify-center flex-col animate-bounce '>
        <svg width="25" height="30" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.6677 22.5003L22.0001 41.1679M22.0001 41.1679L3.33248 22.5003M22.0001 41.1679V3.83268" stroke="#101010" stroke-width="4"/>
        </svg>
        <span className='text-xs text-nao-black'>
          Scroll
        </span>
        </div>
      </section>
      <p className='w-full md:w-3/5 text-base md:text-2xl text-right'>
        Hello, I’m Naomi,
        a multidisciplinary designer  with an architectural background, focusing on digital experiences. 
        Specialising in creating beautiful user experiences for digital products since 2020. 
        Love to solve problems, tell stories and create innovative designs.
      </p>
      </article>
    </div>
  )
}
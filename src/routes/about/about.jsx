import React from 'react'
import { motion, useIsPresent } from 'framer-motion'
import { Bio } from './bio';
import { Education } from './education';
import { Experience } from './experience';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { useRef } from 'react';

export const About = () => {

  const containerRef = useRef();
  const isPresent = useIsPresent();
  useScrollToTop(containerRef);


  return (
    <>
      <motion.main
        ref={containerRef}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className='space-y-14 md:space-y-28 max-w-screen-2xl flex items-center justify-center flex-col pt-28 px-7 lg:px-20'
      >
        <Bio />
        <Education />
        <Experience />
      </motion.main>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacyScreen"
      />
    </>
  )
}
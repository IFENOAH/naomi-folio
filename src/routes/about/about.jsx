import React from 'react'
import { motion, useIsPresent } from 'framer-motion'

export const About = () => {

  const isPresent = useIsPresent();

  return (
    <div className='space-y-56 max-w-screen-2xl flex items-center justify-center flex-col pt-28 text-nao-white'>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacyScreen"
      />
    </div>
  )
}
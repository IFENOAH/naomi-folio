import { Hero } from './hero/hero'
import { SelectedWork } from './selectedwork/selectedwork'
import { motion, useIsPresent } from 'framer-motion'
import { Archive } from './archive/archive'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { useRef } from 'react'

export const Home = () => {


  const containerRef = useRef()
  const isPresent = useIsPresent()
  useScrollToTop(containerRef);

  return (
    <>
      <motion.main
        ref={containerRef}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className='space-y-14 md:space-y-56 max-w-screen-2xl flex items-center justify-center flex-col pt-14 px-7 lg:px-20'
      >
        <Hero />
        <SelectedWork />
        <Archive />
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
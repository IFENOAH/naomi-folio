import { motion } from 'framer-motion'
import { YellowCustomButton } from '../../../compnents/globals/forms/roundyellowbutton'

export const Hero = () => {

  const visible = { opacity: 1, y: 0, transition: { duration: 1, }};
  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className='w-full text-nao-white space-y-12 pt-14'>
      <motion.section className='w-full md:w-1/2'>
        <motion.p 
          variants={itemVariants}
          className='text-base md:text-xl w-full md:w-1/2'>
          Visual and Product Designer based in London.
        </motion.p>
      </motion.section>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible
        }}
        className='w-full md:w-4/5 text-4xl lg:text-[100px] leading-[50px] lg:leading-[100px] overflow-hidden body-font font-Neue font-[450]'>
        A multidisciplinary  designer focusing on digital experiences.
      </motion.p>
      <article className='w-full flex items-end justify-between'>
        <YellowCustomButton text='Scroll' hidden />
        <motion.p 
          variants={itemVariants}
          className='w-full md:w-3/5 text-base md:text-2xl text-right font-[450]'
        >
          Hello, I’m Naomi,
          a multidisciplinary designer  with an architectural background, focusing on digital experiences. 
          Specialising in creating beautiful user experiences for digital products since 2020. 
          Love to solve problems, tell stories and create innovative designs.
        </motion.p>
      </article>
    </motion.div>
  )
}
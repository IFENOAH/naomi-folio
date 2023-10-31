import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Experience = () => {
  return (
    <div className='w-full text-nao-white space-y-20 md:space-y-0'>
        <p className='flex items-start justify-start flex-col space-y-20'>
            <p className='w-1/4 text-6xl md:text-[100px] text-nao-white font-[450px]'>Experience</p>
        </p>

        <div className='w-full flex items-end justify-end flex-col'>
            <div className='w-full md:w-2/5 flex items-start justify-start flex-col space-y-10'>
                <div className='flex items-start flex-col space-y-2'>
                    <ExperienceItem text='NeighborTailor' />
                    <p className='text-base md:text-2xl text-nao-white font-[450px]'>Kingston University, London</p>
                    <span className='text-nao-gray text-sm md:text-xl font-[450px]'>2022 – 2024</span>
                </div>

                <div className='flex items-start flex-col space-y-2'>
                    <p className='text-base md:text-2xl text-nao-white font-medium'>MSc Architecture (Environmental Design)</p>
                    <p className='text-base md:text-2xl text-nao-white font-[450px]'>University of Lagos, Nigeria</p>
                    <span className='text-nao-gray text-sm md:text-xl font-[450px]'>2015 – 2017</span>
                </div>

                <div className='flex items-start flex-col space-y-2'>
                    <p className='text-base md:text-2xl text-nao-white font-medium'>BSc Architecture</p>
                    <p className='text-base md:text-2xl text-nao-white font-[450px]'>University of Lagos, Nigeria</p>
                    <span className='text-nao-gray text-sm md:text-xl font-[450px]'>2015 – 2017</span>
                </div>
            </div>
        </div>
    </div>
  )
}


export const ExperienceItem = ({ text, link }) => {
    return(
        <Link to={link} target="_blank" rel="noopener noreferrer">
            <motion.div className='flex items-center space-x-2 whitespace-nowrap'>
                <span className='text-[32px] font-[450]'>{text}</span>
                <div className='cursor-pointer flex items-start justify-start -rotate-[135deg] hover:translate-x-2 transition-all ease-in-out duration-300'>
                    <svg width="25" height="30" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.6677 22.5003L22.0001 41.1679M22.0001 41.1679L3.33248 22.5003M22.0001 41.1679V3.83268" stroke="#CCFF00" stroke-width="4"/>
                    </svg>
                </div>
            </motion.div>
        </Link>
    )
}
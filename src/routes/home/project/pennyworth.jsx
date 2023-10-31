import image from '../../../assets/images/pworth2.png'
import { YellowCustomButton } from '../../../compnents/globals/forms/roundyellowbutton'
import { motion } from 'framer-motion'
import { useScrollToTop } from '../../../hooks/useScrollToTop'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
 
const pennydata = [
  {
    id: 1,
    title: 'Role',
    value: 'Product Designer'
  },
  {
    id: 2,
    title: 'Responsibilities',
    value: 'UX Design, Research and UI Development'
  },
  {
    id: 3,
    title: 'Time',
    value: '2023'
  },
]

export const PennyWorth = () => {

  const containerRef = useRef();
  useScrollToTop(containerRef);
  const navigate = useNavigate();


  return (
    <motion.div ref={containerRef} className='space-y-14 max-w-screen-2xl flex items-center justify-center flex-col pt-28 text-white'>
      <section className='text-white px-7 lg:px-20 flex items-start justify-between flex-col space-y-8'>
        <div onClick={() => navigate(-1, { replace: true })} className='cursor-pointer flex items-start justify-start rotate-90'>
          <svg width="25" height="30" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.6677 22.5003L22.0001 41.1679M22.0001 41.1679L3.33248 22.5003M22.0001 41.1679V3.83268" stroke="#CCFF00" stroke-width="4"/>
          </svg>
        </div>
        <p className='text-left text-2xl md:text-5xl'>
          Pennyworth is an innovative mobile app that simplifies managing consumer subscriptions.
          It provides users with tools to conveniently track, organise, and control their various 
          subscription expenses from one centralised platform.
        </p>
        <section className='w-full flex items-end justify-between'>
          <div className='w-full flex flex-col items-start md:items-center md:flex-row justify-between md:w-3/5 space-y-4 md:space-y-0'>
            {
              pennydata?.map(item => (
                <DataCard 
                  key={item.id}
                  title={item.title}
                  value={item.value}
                />
              ))
            }
          </div>
          <YellowCustomButton text='Jump to H-Fidelity' cursor />
        </section>
      </section>
      <img
        className='w-full transition-all ease-in-out duration-1000'
        src={image}
        style={{
          objectFit: 'cover'
        }}
        loading='lazy'
        alt='project-image'
      />
    </motion.div>
  )
}

export const DataCard = ({ title, value }) => {
  return (
    <div className='flex items-start flex-col space-y-1'>
      <span className='text-nao-main text-base md:text-xl'>{title}</span>
      <p className='text-nao-white text-base md:text-xl'>{value}</p>
    </div>
  )
}
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { YellowCustomButton } from '../compnents/globals/forms/roundyellowbutton'

const connectlinks = [
    {
        id: 1,
        text: "email",
        link: ''
    },
    {
        id: 2,
        text: "resume",
        link: ''
    }
]

const sociallinks =[
    {
        id:1, 
        text: 'linkedin',
        link: ''
    },
    {
        id:2, 
        text: 'behance',
        link: ''
    },
    {
        id:3, 
        text: 'dribbble',
        link: ''
    },
]

export const Footer = ({ onClick }) => {

  return (
    <div className='bg-nao-darkGray w-full px-20 py-32 text-white flex items-start justify-between'>
        <main className='w-1/2 flex items-start flex-col space-y-32'>
            <header className='flex items-end justify-end'>
                <h1 className='text-6xl md:text-[100px] font-[450]'>Like to work together?
                    <span className='text-[32px] font-[450] whitespace-nowrap'>Get in touch</span>
                </h1>
            </header>

            <div className='w-full flex flex-col items-start justify-between space-y-10 md:space-y-0 md:flex-row '>
                <section className='flex items-start flex-col space-y-4'>
                    <h2 className='text-[32px] font-[450]'>Connect</h2>
                    <ul className='flex items-start flex-col space-y-2'>
                        {connectlinks?.map(item => (
                            <LinkItem 
                                key={item.id}
                                text={item.text}
                                link={item.link}
                            />
                        ))}
                    </ul>
                </section>

                <section className='flex items-start flex-col space-y-4'>
                    <h2 className='text-[32px] font-[450]'>Follow</h2>
                    <ul className='flex items-start flex-col space-y-2'>
                        {sociallinks?.map(item => (
                            <LinkItem 
                                key={item.id}
                                text={item.text}
                                link={item.link}
                            />
                        ))}
                    </ul>
                </section>
            </div>
        </main>

        <div 
            className='-mt-[150px]'>
            <YellowCustomButton
                onClick={onClick}
                text='Back to Top' 
                cursor 
                rotate 
            />
        </div>
    </div>
  )
}

export const LinkItem = ({ text, link }) => {
    return(
        <Link to={link} target="_blank" rel="noopener noreferrer">
            <motion.div className='flex items-center space-x-2'>
                <li className='text-[32px] font-[450]'>{text}</li>
                <div className='cursor-pointer flex items-start justify-start -rotate-[135deg] hover:translate-x-2 transition-all ease-in-out duration-300'>
                    <svg width="25" height="30" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.6677 22.5003L22.0001 41.1679M22.0001 41.1679L3.33248 22.5003M22.0001 41.1679V3.83268" stroke="#CCFF00" stroke-width="4"/>
                    </svg>
                </div>
            </motion.div>
        </Link>
    )
}
import React, { useEffect, useState } from 'react'
import Hitch from '../../../assets/images/hitch.png'
import Vyott from '../../../assets/images/vyott.png'
import Swift from '../../../assets/images/swift.png'
import PennyImage from '../../../assets/images/pworth2.png'
import { motion } from 'framer-motion'

const archive = [
    {
        id: 1,
        title: "Neighbortailor",
        img: Hitch
    },
    {
        id: 2,
        title: "ShopTopUp",
        img: Vyott
    },
    {
        id: 3,
        title: "PTEE",
        img: Swift
    },
]

export const Archive = () => {

    const [currentIndex, setCurrentIndex] = useState(1)

    useEffect(() => {
        const timer = setTimeout(() => {
            if(currentIndex === 3) {
                setCurrentIndex(1)
            } else {
                setCurrentIndex( currentSlide => currentSlide + 1 )
            }
        }, 5000)
      return () => {
        clearTimeout(timer)
      }
    }, [currentIndex])


    return (
        <div className='w-full text-white flex flex-col md:flex-row items-start justify-start space-y-14 md:space-y-0 pb-44'>
            <section className='w-2/5 flex items-start justify-between flex-col space-y-10'>
                <p className='w-1/2 text-6xl md:text-8xl text-nao-white flex items-start justify-start font-[450] '>Archive</p>
                <section className='md:flex items-start flex-col space-y-5 hidden '>
                    {
                        archive.map(item => (
                            <motion.p 
                                className='text-[32px] font-[450] cursor-pointer hover:translateX(100%)'
                                onMouseEnter={() => setCurrentIndex(item.id)}
                                key={item.id}>
                                {item.title}
                            </motion.p>
                        ) )
                    }
                </section>
            </section>

            <motion.main
                className='w-full md:w-3/5 h-[500px] transition-all ease-in-out duration-300'
                style={{
                    backgroundImage : `url(${archive[currentIndex]?.img ?? PennyImage })`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    objectFit: "contain",
                }}
            /> 
        </div>
    )
}
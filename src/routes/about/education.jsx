import React from 'react'

export const Education = () => {
  return (
    <div className='w-full text-nao-white space-y-20 md:space-y-0'>
        <p className='flex items-start justify-start flex-col space-y-20'>
            <p className='w-1/4 text-6xl md:text-[100px] text-nao-white font-[450px]'>Education</p>
        </p>

        <div className='w-full flex items-end justify-end flex-col'>
            <div className='w-full md:w-2/5 flex items-start justify-start flex-col space-y-10'>
                <div className='flex items-start flex-col space-y-2'>
                    <p className='text-base md:text-2xl text-nao-white font-medium'>MSc User Experience Design</p>
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
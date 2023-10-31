import React from 'react'

export const YellowCustomButton = ({ text, hidden, cursor, rotate, onClick }) => {
  return (
    <section className={`${hidden ? 'hidden md:block' : '' } ${cursor && 'cursor-pointer'}`}>
      <div onClick={onClick} className={`bg-nao-main w-20 h-20 rounded-full flex items-center justify-center flex-col animate-bounce`}>
        <div className={`${rotate ? 'rotate-180' : ''}`}>
          <svg width="25" height="30" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.6677 22.5003L22.0001 41.1679M22.0001 41.1679L3.33248 22.5003M22.0001 41.1679V3.83268" stroke="#101010" stroke-width="4"/>
          </svg>
        </div>
        <span className='text-xs text-nao-black flex items-center justify-center text-center'>
          {text}
        </span>
      </div>
    </section>
  )
}
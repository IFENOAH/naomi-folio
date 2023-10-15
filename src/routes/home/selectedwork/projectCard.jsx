import { Marquee } from "../../../compnents/globals/marquee/marquee"

export const ProjectCard = ({ image, title, text }) => {
  
    return (
      <div className='flex items-start flex-col w-full space-y-5 overflow-auto'>
        <div className='w-full h-[480px] overflow-hidden relative group cursor-pointer'>
            <img 
                className='w-full h-full group-hover:scale-150 hover:blur-sm group-hover:opacity-30 transition-all ease-in-out duration-1000'
                src={image}
                loading='lazy'
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 hidden group-hover:flex items-center justify-center ">
                <Marquee name={title} />
            </div>
        </div>
        <section className='w-1/2 text-nao-white space-y-5'>
          <div className='flex items-center space-x-2'>
            <p className='text-lg md:text-3xl whitespace-nowrap'>{title}</p>
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0002 2.62061L25.8796 14.5M25.8796 14.5L14.0002 26.3794M25.8796 14.5H2.12085" stroke="#FCFCFC" stroke-width="2"/>
            </svg>
          </div>
          <p className='text-sm md:text-2xl'>
            {text}
          </p>
        </section>
      </div>
    )
  }
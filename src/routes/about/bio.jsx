import React from 'react'
import ProfileImg from '../../assets/images/profile.png'
import { YellowCustomButton } from '../../compnents/globals/forms/roundyellowbutton'

export const Bio = () => {
  return (
    <div className='w-full text-nao-white space-y-12 pt-14'>
        <div className='flex items-start justify-start flex-col space-y-20'>
            <p className='w-1/4 text-6xl md:text-[100px] text-nao-white font-[450px]'>About me</p>
            <div className='w-full flex flex-col items-start justify-start md:flex-row space-y-20 md:space-y-0 md:space-x-24'>
                <section className='w-full md:w-2/5 flex items-start flex-col space-y-16'>
                    <div 
                        className='w-full h-[350px] md:min-h-[700px] transition-all ease-in-out duration-300'
                        style={{
                            backgroundImage : `url(${ ProfileImg })`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            objectFit: "contain",
                        }}
                    />
                </section>

                <article className='w-full md:w-3/5 space-y-20 flex items-start justify-start flex-col font-[450] text-2xl'>
                    <p>
                        I am a passionate User Experience Designer with a diverse background
                        in architecture and interior design, providing me with a holistic approach
                        to crafting user-centric solutions. My enthusiasm for design extends beyond
                        my professional role, as I am genuinely captivated by the intricacies of how 
                        people make decisions in design and the underlying reasons behind their choices. 
                        My inquisitive nature drives me to explore the inner workings of design problems, 
                        making me a highly empathetic problem solver.
                    </p>

                    <p>
                        When confronted with a design challenge, I dive headfirst into understanding the problem's context, 
                        immersing myself in the world of the issue, seeking to comprehend why it exists and how people interact with it. 
                        My ability to step out of my designer's shoes and inhabit the perspective of the user allows me to envision solutions
                        that resonate with their needs and desires. I firmly believe that functional design should always take precedence, 
                        but I also recognise the value of innovation and aesthetics in creating impactful solutions.
                    </p>

                    <p>
                        My strength lies in my commitment to the craft and my desire to master a wide range of skills. 
                        Whether it's delving into the intricacies of user behaviour or gaining expertise in various design disciplines, 
                        I am constantly broadening my horizons to bring fresh perspectives to problem-solving. 
                        I am a firm advocate for designs that not only functions seamlessly but also leave a lasting impression
                        and resonate with users on a profound level. In my world, design isn't just
                        a profession—it's a lifelong passion that fuels my curiosity and creativity.
                    </p>

                    <div className='space-y-4 font-[450s] text-2xl'>
                        <p>Some of my interests include:</p>
                        <ul className='space-y-2'>
                            <li>Graphic Design</li>
                            <li>Crafts and DIYs</li>
                            <li>Physical Product Design</li>
                        </ul>
                    </div>
                </article>
            </div>
            <div className='flex items-end justify-end w-full'>
                <YellowCustomButton
                    cursor
                    text='Gallery'
                    rotate
                />
            </div>
        </div>
    </div>
  )
}
import PennyImage from '../../../assets/images/penny.png'
import Hitch from '../../../assets/images/hitch.png'
import Vyott from '../../../assets/images/vyott.png'
import Split from '../../../assets/images/split.png'
import Yaba from '../../../assets/images/yaba.png'
import Swift from '../../../assets/images/swift.png'
import { ProjectCard } from './projectCard'
import { Marquee } from '../../../compnents/globals/marquee/marquee'

const projects = [
  {
    id: 1,
    image: PennyImage,
    title: 'Pennyworth',
    text: 'Personal finance app for subscription management.'
  },
  {
    id: 2,
    image: Hitch,
    title: 'Hitch',
    text: 'Peer-to-peer carpooling designed for Nigeria Youths finance app for subscription management.'
  },
  {
    id: 3,
    image: Vyott,
    title: 'Vyott',
    text: 'Rental property maintenance app catering to property owners.'
  },
  {
    id: 4,
    image: Split,
    title: 'Split Bills - Gomoney',
    text: 'Money management feature for Gomoney digital banking users.'
  },
  {
    id: 5,
    image: Swift,
    title: 'SwiftSpeak',
    text: 'AI powered language learning for busy learners.'
  },
  {
    id: 6,
    image: Yaba,
    title: 'Yaba',
    text: 'Web bookmarking plugin designed for tech enthusiast.'
  },
]

export const SelectedWork = () => {

  return (
    <div className='w-full space-y-36'>
      <header className='w-full md:w-1/4'>
        <p className='w-1/2 text-6xl md:text-8xl text-nao-white flex items-start justify-start'>Selected Work</p>
      </header>
      <section className='w-full grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
        {
          projects?.map(item => (
            <ProjectCard 
              key={item.id}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))
        }
      </section>
    </div>
  )
}


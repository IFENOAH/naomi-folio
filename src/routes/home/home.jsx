import { Hero } from './hero/hero'
import { SelectedWork } from './selectedwork/selectedwork'

export const Home = () => {

  return (
    <main className='space-y-56 max-w-screen-2xl flex items-center justify-center flex-col pt-14'>
      <Hero />
      <SelectedWork />
    </main>
  )
}
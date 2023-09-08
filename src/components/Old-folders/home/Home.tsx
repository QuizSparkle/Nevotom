import React from 'react'
import Hero from './Hero'
import Picks from './Picks'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div>
      <section className="flex flex-col max-h-[90%] overflow-y-scroll 
    scrollbar-thin">
      <Hero />
      <Picks />
    </section>
  </div>
  )
}

export default Home

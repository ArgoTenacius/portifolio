import React from 'react'
import './app.css'
import { AboutMe, Contact, LandingPage, Project, Skill } from './components'

const App = () => {
  return (
    <main className='page'>
      <LandingPage />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
    </main>
  )
}

export default App
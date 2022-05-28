import React from 'react'
import './app.css'
import { Contact, Project, Skill } from './components'

const App = () => {
  return (
    <main className='page'>
      <Skill />
      <Project />
      <Contact />
    </main>
  )
}

export default App
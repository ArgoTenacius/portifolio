import React from 'react'
import './app.css'
import { Project, Skill } from './components'

const App = () => {
  return (
    <main className='page'>
      <Skill />
      <Project />
    </main>
  )
}

export default App
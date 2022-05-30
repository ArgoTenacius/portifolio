import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  return (
    <>
    <div className='section__separator'>
        <h1>Contact</h1>
        <div className='line'></div>
    </div>
    <main className='contact' id='contact'>
        <div>
            <h1 className='text-shadow yellow'>ArgoTenacius@gmail.com</h1>
        </div>
        <div className='contact__others'>
            <a href="https://github.com/ArgoTenacius" target='_blank' rel='noreferrer'><AiFillGithub className='contact__others-icon'/></a>
        </div>
    </main>
    </>
  )
}

export default Contact
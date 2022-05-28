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
    <main className='contact'>
        <div>
            <h1 className='text-shadow yellow'>ArgoTenacius@gmail.com</h1>
        </div>
        <div className='contact__others'>
            <AiFillGithub className='contact__others-icon'/>
        </div>
    </main>
    </>
  )
}

export default Contact
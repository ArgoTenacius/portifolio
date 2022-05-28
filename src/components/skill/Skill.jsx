import React from 'react'
import './skill.css'
import './skillCard/SkillCard'
import { frontEnd, miscellaneous } from '../../data/skill'
import SkillCard from './skillCard/SkillCard'


const Skill = () => {
  return (
    <>
    <div className='section__separator'>
        <h1>My skills</h1>
        <div className='line'></div>
    </div>
    <main className='skill'>
        <section className='skill__block'>
            {
                frontEnd.map((index, id) => (
                    <SkillCard key={id} name={index.name} icon={index.photo} />
                ))
            }
        </section>
        <section className='skill__block'>
            {
                miscellaneous.map((index, id) => (
                    <SkillCard key={id} name={index.name} icon={index.photo} />
                ))
            }
        </section>
    </main>
    </>
  )
}

export default Skill
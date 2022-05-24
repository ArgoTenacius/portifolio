import React from 'react'
import './skill.css'
import './skillCard/SkillCard'
import { frontEnd, miscellaneous } from '../../data/skill'
import SkillCard from './skillCard/SkillCard'


const Skill = () => {
  return (
    <main>
        <section>
            {
                frontEnd.map((index) => (
                    <SkillCard name={index.name} icon={index.photo} />
                ))
            }
        </section>
        <section>
            {
                miscellaneous.map((index) => (
                    <SkillCard name={index.name} icon={index.photo} />
                ))
            }
        </section>
    </main>
  )
}

export default Skill
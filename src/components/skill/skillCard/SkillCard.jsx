import React from 'react'
import './skillCard.css'

const SkillCard = ({name, icon}) => {
  return (
    <div>
        <img src={icon} alt={name} />
        <h1>{name}</h1>
    </div>
  )
}

export default SkillCard
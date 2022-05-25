import React, {useState} from 'react'
import { useEffect } from 'react';
import './skillCard.css'

const SkillCard = ({name, icon}) => {
  const [mouseHover, setMouseHover] = useState(false);

  const mouseEnter = {
    animation: "goUp 200ms forwards"
  }  

  const mouseLeave = {
    animation: "goDown 200ms forwards"
  }

  useEffect(() => { console.log(mouseHover)}, [mouseHover])

  return (
    <div className='skillCard' onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
      <div className='skillCard__container' style={mouseHover ? mouseEnter : mouseLeave}>
          <img className='skillCard__container-image' src={icon} alt={name} />
      </div>
      { mouseHover && <h1 className='skillCard__title'>{name}</h1> }
    </div>
  )
}

export default SkillCard
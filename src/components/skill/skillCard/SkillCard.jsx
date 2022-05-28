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

  const showCardTitle = (show) => {
    setMouseHover(show)
  }

  useEffect(() => { 
    window.innerWidth > 960 ? showCardTitle(false) : showCardTitle(true)
  }, [])

  return (
    <div className='skillCard' onMouseEnter={() => showCardTitle(true)} onMouseLeave={() => showCardTitle(false)}>
      <div className='skillCard__container' style={mouseHover ? mouseEnter : mouseLeave}>
          <img className='skillCard__container-image' src={icon} alt={name} />
      </div>
      { mouseHover && <h1 className='skillCard__title'>{name}</h1> }
    </div>
  )
}

export default SkillCard
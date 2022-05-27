import React from 'react'
import './project.css'
import { project } from '../../data/project'
import { useState } from 'react'

const Project = () => {
  return (
    <main className='project'>
        {
            project.map((index) => (
                <section className='project__section'>
                    <div className='project__section-images'>
                        <img src={index.photo} className="project__section-images--photo" alt={index.name}/>
                    </div>
                    <div className='project__section-details'>
                        <h1 className='project__section-details--title'>{index.name}</h1>
                        <h4 className='project__section-details--description'>{index.description}</h4>
                        <div className='project__section-details--buttons'>
                            <a href={index.repository}><button>Repository</button></a>
                            <a href={index.live}><button>Live</button></a>
                        </div>
                    </div>
                </section>
            ))
        }
    </main>
  )
}

export default Project
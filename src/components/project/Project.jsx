import React from 'react'
import './project.css'
import { project } from '../../data/project'

const Project = () => {
  return (
    <main className='project'>
        <div className='section__separator'>
            <h1>Featured projects</h1>
            <div className='line'></div>
        </div>
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
                            <a href={index.repository} target='_blank' rel='noreferrer'><button>Repository</button></a>
                            <a href={index.live} target='_blank' rel='noreferrer'><button>Live</button></a>
                        </div>
                    </div>
                </section>
            ))
        }
    </main>
  )
}

export default Project
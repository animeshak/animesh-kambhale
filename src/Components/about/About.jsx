import React from 'react'
import './about.css'
import ME from '../../assets/ani-pic.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            < img src={ME} alt="my image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
          Hey, I'm Animesh, a Full Stack Developer passionate about creating web applications that solve real-world problems. I excel in building intuitive user interfaces and optimizing server-side performance. My mission is to make technology accessible and enjoyable for everyone.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
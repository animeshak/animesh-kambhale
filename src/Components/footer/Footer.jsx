import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

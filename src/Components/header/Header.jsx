import React from 'react'
import './header.css'
import CTA from './Cta'
import ME from '../../assets/animesh-pic.png'
import HeaderSocials from './HeaderSocials'


export default function Header() {
  return (
    <>
      <header className="container header__container">

        <h5>Hello i am </h5>
        <h1>Animesh Kambhale</h1>
        <h5 className="text-light">Fullstack Developer</h5>
          <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
        <CTA/>
      </header>
    </>
  )
}

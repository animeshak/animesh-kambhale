import React from 'react'
import Header from './Components/header/Header'
import About from './Components/about/About'
import Navbar from './Components/nav/Navbar'
import Experience from './Components/experience/Experience'
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'

export default function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}
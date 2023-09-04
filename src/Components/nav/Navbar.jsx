import React from 'react'
import './navbar.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiSolidContact} from 'react-icons/bi'
import { useState } from 'react'
import { MdTask } from 'react-icons/md'


export default function Navbar() {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav>
      <a href='#'onClick={()=>setActiveNav('#')} className={activeNav == '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav == '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience'onClick={()=>setActiveNav('#experience')} className={activeNav == '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav == '#portfolio' ? 'active' : ''}><MdTask/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}><BiSolidContact/></a>
    </nav>
  )
}
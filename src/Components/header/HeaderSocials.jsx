import React from 'react'
import {BsDribbble, BsGithub, BsLinkedin} from 'react-icons/bs'

export default function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/animesh-kambhale-7b7818238/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/animeshak' target='_blank'><BsGithub/></a>
        {/* <a href='https://dribble.com' target='_blank'><BsDribbble/> </a> */}
    </div>
    )
}
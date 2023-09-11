import React from 'react'
import {GitHub , LinkedIn , Email} from '@mui/icons-material'
import img1 from '../image/pro1.png'
import '../styles/Home.css'

function Home() {
  return (
    
    <div className='home-background'>
        <div className='home-content'>
            <h3>Hello, it's me</h3>
            <h1>Akash K S</h1>
            <h3>
                And I am a
                <span>Full Stack Developer</span>
            </h3>
            <p>
                I am a Full Stack Developer based in Kerala, India. Let's work together
            </p>
            <div className='social'>
                 <a href='https://github.com/EEakashks'><GitHub/></a>
                 <a href='akashks777@gmail.com'><Email/></a>
                 <a href='https://www.linkedin.com/in/akash-k-s-9214101b9/'><LinkedIn/></a>
            </div>
            <a href='#' className='btn'>Download CV</a>
        </div>
        <div className='home-img'>
            <img src= {img1} />
        </div>
    </div>
    
  )
}

export default Home
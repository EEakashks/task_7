import React from 'react'
import { Facebook, LinkedIn, Email, GitHub } from '@mui/icons-material'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href='https://github.com/EEakashks'><GitHub/></a>
           <a href='akashks777@gmail.com'><Email/></a>
           <a href='https://www.linkedin.com/in/akash-k-s-9214101b9/'><LinkedIn/></a>
           <a href='https://www.facebook.com/profile.php?id=100005281576664'><Facebook/></a>
          
        </div>
        <p> &copy; 2023 AkashksE7portfolio.app</p>
    </div>
  )
}

export default Footer
import React from 'react'
import { Parallax , ParallaxLayer } from '@react-spring/parallax'
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience-parent' id='experience-id'>
        <Parallax pages={2} style={{ left: '0' }} className='animation'>
      <ParallaxLayer offset={0} speed={0.25}>
        <div className='animation-layer parallax' id='background'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div className='animation-layer parallax' id='mountain'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div className='animation-layer parallax' id='logo'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div className='animation-layer parallax' id='jungle1'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div className='animation-layer parallax' id='jungle2'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className='animation-layer parallax' id='jungle3'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45}>
        <div className='animation-layer parallax' id='jungle4'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.40}>
        <div className='animation-layer parallax' id='man'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div className='animation-layer parallax' id='jungle5'></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.25}>
      <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">Hands-On Experience</h1>
                <p id="textblock-content">
                From November 2022.<br/><br/>
                I am having hands-on experience in React.js(built a completely responsive portfolio).<br/><br/>
                Hands-on experience in Javascript(built multiple projects including Log-in page & Calculator).<br/><br/>
                Having intensive hands-on experience over HTML, CSS, Bootstrap(built a completely responsive blog application).
                </p>
            </div>
        </div>
      </ParallaxLayer>
    </Parallax>
    </div>
  )
}

export default Experience
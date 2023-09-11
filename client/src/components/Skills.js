import React from 'react'
import '../styles/Skills.css'

function Skills() {
  return (
    <div className='skills-parent' id='skills-id'>
    <h2>Skills</h2>
  <div className='skills-content'>
    <div className='skills-info' >
     
      <h1>HTML</h1>
      <div className='progress-bar' >
        <div className='html' >
          <span>80%</span>
        </div>
      </div>
      <h1>CSS</h1>
      <div className='progress-bar' >
        <div className='css' >
          <span>70%</span>
        </div>
      </div>
      <h1>JavaScript</h1>
      <div className='progress-bar' >
        <div className='javascript' >
          <span>50%</span>
        </div>
      </div>
      <h1>React.js</h1>
      <div className='progress-bar' >
        <div className='react' >
          <span>40%</span>
        </div>
      </div>
    </div>
    
   </div>
  </div>
  )
}

export default Skills
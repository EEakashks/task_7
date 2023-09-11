import React from 'react'
import img2 from '../image/pro2.png'
import '../styles/About.css'

function About() {
  return (
    <div className='about-parent' id='about-id'>
        <div className='about-img'>
            <img src={img2} />
        </div>
        <div className='about-content'>
            <h2 className='heading'>About <span>Me</span></h2>
            <h3>Full Stack Developer</h3>
            <p>"The greatest glory in living lies not in never falling, but in rising every time we fall" - Nelson Mandela<br></br>
               "You are always a student, never a master. You have to keep moving forward." - Conrad Hall <br></br>
               I think the above quotes can describe me in a good manner. The reason I am currently being a Javascript Developer even after having career gaps is only due to my enthusiasm for technology and to be one of the best programmer's in future.
               Despite all the struggles, I keep on pushing myself, building my work ethics, and learning new skills. Now I can proudly say that a list of my skills which includes Javascript, React.js, Bootstrap, HTML, and CSS.
               I am continuously building my work ethics, learning new things every moment.<br></br>
               "Always remember that you are absolutely unique. Just like everyone else." - Margaret Mead
            </p>
            <div className='read'>
            <a href='#' className='btn'>read more</a>
            </div>
        </div>
    </div>
  )
}

export default About
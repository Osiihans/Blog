import React from 'react';
import meimg from '../../assets/about.jpg';
import Hero from '../Hero/Hero';
import Bottombar from '../../layout/Bottombar';
const About = () => {
  return (
    <>
    <Hero/>

 <h2 align="center">About <span>Me</span></h2>
    <div className="about-content">
                <img src={meimg} alt="About Me"/>
                <p>Hello! I'm a passionate developer and avid traveler. This blog is a space where I share my journey through the worlds of coding, travel, fitness, and creativity. Join me as I explore new destinations, stay fit, and indulge in my hobbies. Thank you for visiting!</p>
            </div>
        <Bottombar/>
    </>
    

  )
}

export default About
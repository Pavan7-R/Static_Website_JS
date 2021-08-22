import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import video from  "../src/video.mp4"

const About = () =>
{
  return(
    <>
 
  <div className="v-header container1">
  <div className="fullscreen-video-wrap">
  <video src={video} muted autoPlay loop ></video>
  </div>
  <div className="header-overplay"></div>
  <div className="header-content text-md-center">
    <h1>ABOUT US</h1>
    <br />
    <p >
      Course Essentials Inc. is an Indian massive open online course provider founded in 2021 by Vishveshvaraya Technological University computer science professors Nikhitha Jain and Pavan Kumar V S. Coursera works with universities and other organizations to offer online courses, certifications, and degrees in a variety of subjects.
      <br />
      </p>
      <button className="btn"> Read More</button>
  </div>
  </div>
</>
  )
}




export default About;
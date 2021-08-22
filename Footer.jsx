import React from 'react'
import styled from 'styled-components'
import './Footer.css';
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-middle">
      <div className="container">
        <div className="row">
          {/* Column 1*/}
          <div className="col-md-6 col-sm-6">
            <h4><FiPhoneCall/>  Contact Us</h4> 
              <ul className="list-unstyled">
                <li>Ph: 555-666-7777</li>
                <li>Manglore</li>
                <li>Karnataka</li>
                <li>India</li>
              </ul>
            
          </div>
          {/* Column 2*/}
          <div className="col-md-3 col-sm-6">
            <h4>Community 
              <ul className="list-unstyled">
                <li><FiFacebook/>@Facebook/CourseEssential</li>
                <li><FiTwitter/>@Twitter/CourseEssential</li>
                <li><FiInstagram/>@Instagram/CourseEssential</li>
                <br />
              </ul>
            </h4>
          </div>
          </div>
          <div className="footer-Bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} PAVAN_KUMAR & NIKHITHA_JAIN All Rights Reserved
            </p>
          </div>
      </div>
      </div>
    </div>
    
  )
}

export default Footer;

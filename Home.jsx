import React from "react"
import Login from "./Login"
import './Home.css';
import web from "../src/Edu.png"
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import logo from "../src/Collab.jpg"
import png1 from "../src/1.png"
import png2 from "../src/2.png"
import png3 from "../src/3.png"
import png4 from "../src/4.png"
const Home = () =>
{
  const head = {
    color:"Blue",
    fontSize:"100px"
}
  return(
    <>
    <section id="header" className="d-flex align-items-center">
    <div class="container-3">
        <div class="be">
            <h2>Learn Without Limit and Get Certified with </h2>
            <div className="brand-name">
                Course Essential</div>
                <br />
            <h3>Take the next step in your career with a world class learning experience.</h3>
            <br />
            <NavLink className="btn"
            to="/Register">
              Get Started
            </NavLink >
            
            <div className="colab">
            <br />
              <h4>We are collaborate with 200+ leading university and companies</h4>
              <br />
              <img src={logo} className= "img-fluid animated1"  alt="Home-img" />
            </div>
           
        </div> 
        <div className="header-img">
            <img src={web} className= "img-fluid animated" src={web}  alt="Home-img" />
           


        </div>
        </div>
  </section>
        <h1 className="Text">
          Follow the way which leads to Success
        </h1>
        <div className="Container">
        <img src={png1} className= "Animated"  alt="Home-img" />
        <img src={png2} className= "Animated"  alt="Home-img" />
        <img src={png3} className= "Animated"  alt="Home-img" />
        <img src={png4} className= "Animated"  alt="Home-img" />

        </div>
    </>
  )
}
export default Home;

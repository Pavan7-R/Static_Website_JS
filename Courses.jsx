import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import web from "../src/Edu.png"
import { NavLink } from 'react-router-dom';
import './Home.css';
import './courses.css';
import c from "../src/c.jpg"
import css from "../src/css.jpg"
import hmtl from "../src/html.jpg"
import java from "../src/java.jpg"
import javascript from "../src/javascript.jpg"
import python from "../src/python.jpg"
import sql from "../src/sql.jpg"
import linux from "../src/linux.jpg"
import img1 from "../src/img1.jpg"

const Courses = () =>
{
  return(
    <>
    <h1 className="Text">Courses that we offer</h1>
    <div className="container">
  <div className="row">
    <div className="col">
      <div class="card">
  <img src={c} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope,recursion, with a static type system, C provides constructs that map efficiently to typical machine instructions</p>
    
    <NavLink className="btn btn-outline-success"to="/Register" className="button">
      Enroll</NavLink >
  </div>
</div>
    </div>
    <div className="col">
      <div class="card">
  <img src={css} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
    <NavLink className="btn btn-outline-success"
            to="/Register" className="button">
              Enroll
            </NavLink >
  </div>
</div>
</div>
    <div className="col">
      <div class="card">
  <img src={hmtl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
    <NavLink className="btn btn-outline-success"
            to="/Register" className="button">
               Enroll
            </NavLink >
  </div>
</div>
</div>
</div>
</div>
<br />
<div className="container">
  <div className="row">
    <div className="col">
      <div class="card">
  <img src={java} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
    <NavLink className="btn btn-outline-success"to="/Register" className="button">
      Enroll</NavLink >
  </div>
</div>
    </div>
    <div className="col">
      <div class="card">
  <img src={javascript} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">JavaScript, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.</p>
    <NavLink className="btn btn-outline-success"
            to="/Register" className="button">
              Enroll
            </NavLink >
  </div>
</div>
    </div>
    <div className="col">
      <div class="card">
  <img src={linux} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on 1977, by Linus Torvalds.
    </p>
    <NavLink className="btn btn-outline-success"
            to="/Register" className="button">
               Enroll
            </NavLink >
  </div>
</div>
    </div>
  </div>
</div>
<br />
<div className="container">
  <div className="row">
    <div className="col">
      <div class="card">
  <img src={python} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation</p>
    <NavLink className="btn btn-outline-success"to="/Register" className="button">
      Enroll</NavLink >
  </div>
</div>
    </div>
    <div className="col">
      <div class="card">
  <img src={sql} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for data stream management system.</p>
    <NavLink className="btn btn-outline-success"
            to="/Register" className="button">
              Enroll
            </NavLink >
  </div>
</div>
    </div>
    <div className="col">
      <div class="card">
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Data analysis is a process of inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information, informing conclusions, and supporting decision-making</p>
    <NavLink className="btn btn-outline-success"
            to="/Register" className="button">
               Enroll
            </NavLink >
  </div>
</div>
    </div>
  </div>
</div>
<br />
<br />
</>
  )
}
export default Courses;

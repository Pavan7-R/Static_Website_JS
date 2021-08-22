import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect} from "react-router-dom";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import ComplexGrid from "./header";
const App = () =>
{
  return(
    <>
    <ComplexGrid />
    <NavBar/>
   
    <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Redirect to="/" />
    </switch>
    <Footer/>
    </>
   
  )
}
export default App;

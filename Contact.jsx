import React from "react";
import web from "../src/Contact.png"
import './Contact.css';
const Contact = () =>
{
  return(
    <>
  
    <div className="container-7">
        <form className="my-form">
        <label>CONTACT</label>
            <div className="form-group">
           
                <input type="text" name="Name" placeholder="Enter the name" />
            </div>
            
            <div className="form-group">
              
                <input type="text" name="Mail ID" placeholder="Enter the Mail"/>
            </div>
            
            <div className="form-group">
                
            <textarea placeholder="Your Message"></textarea>
            </div>
            <input type="submit" name="" value="Submit"/>
        </form>
    </div>
    </>
  )
}
export default Contact;

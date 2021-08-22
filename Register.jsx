import React from "react";
import './Register.css';


const Register = () =>{
  return(
    <div className="container-7">
        <form className="my-form">
          <label>REGISTER</label>
            
            <div className="form-group">
               
                <input type="text" name="Name" placeholder="First name" />
            </div>

            <div className="form-group">
               
                <input type="text" name="Name" placeholder="Last name" />
            </div>

            <div className="form-group">
               
                <input type="text" name="Name" placeholder="Enter the email id" />
            </div>

            <div className="form-group">
               
                <input type="text" name="Name" placeholder="Phone Number" />
            </div>
            
            <div className="form-group">
               
            < input type="password" name="Password" placeholder="Password"/>
            </div>
            
            <input type="submit" name="" value="Register" className = 'button'/>
            
        </form>
    </div>


  )
}

export default Register;

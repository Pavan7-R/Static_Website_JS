import React from "react"
import './Login.css';


const Login = () =>{
  return(
    <div className="container-7">
        <form className="my-form">
          <label>LOG IN</label>
            
            <div className="form-group">
               
                <input type="text" name="Name" placeholder="Enter the name" />
            </div>
            
            <div className="form-group">
               
            < input type="password" name="Password" placeholder="Password"/>
            </div>
            <input type="submit" name="" value="Login"/>
        </form>
    </div>


  )
}

export default Login

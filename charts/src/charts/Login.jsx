import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Login (){
    const[username, setusername]= useState('')
    const [password, setPassword]=useState('')
    const navigate = useNavigate();

    

    const handledashboard =()=>{
      navigate ('/Chart');
    };

   

    const handlesignup =()=>{
      navigate ('/Signup');
    };




    return(
        <>
        <div className="main-div">
            <div className="login-div">
                <br></br>
                <center>
                    <h5>LOGIN</h5>
            <input
             placeholder="User Name"
             value={username} onChange={(e) => setusername(e.target.value)}/>
             <br></br><br></br>
             <input 
             placeholder="Password"
             value={password} onChange={(e) => setPassword(e.target.value)}/>
             <br></br><br></br>
             <Button variant="primary" onClick={handledashboard}>Login</Button>{' '}
             <p>if you are not yet our user then signup here </p>
             <Button variant="warning" onClick={handlesignup}>Signup</Button>{' '}
             </center>
            </div>


        </div>
        </>
    )
}
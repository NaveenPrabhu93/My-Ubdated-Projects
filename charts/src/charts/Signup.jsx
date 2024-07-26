import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export default function Signup(){
    const[username, setusername]= useState('')
    const [password, setPassword]=useState('')
    const [reenterpassword, setreenterpassword]=useState('')
    const [phonenumber, setphonenumber]=useState('')
    const[Address, setAddress]=useState('')

    const navigate = useNavigate();
    const handlelogin =()=>{
      navigate ('/Logout');
    };


    return(
        <>
        <div className="main-div">
            
            <div className="signup-div">
                <br></br>
                <center>
                    <h5>SIGN UP</h5>
            <input
             placeholder="User Name"
             value={username} onChange={(e) => setusername(e.target.value)}/>
             <br></br><br></br>
             <input 
             placeholder="Password"
             value={password} onChange={(e) => setPassword(e.target.value)}/>
             <br></br><br></br>
             <input 
             placeholder="Re Enter Password"
             value={reenterpassword} onChange={(e) => setreenterpassword(e.target.value)}/>
             <br></br><br></br>
             <input 
             placeholder="Phone Number"
             value={phonenumber} onChange={(e) => setphonenumber(e.target.value)}/>
             <br></br><br></br>
             <input 
             placeholder='Address'
             className="address"
             value={Address} onChange={(e) => setAddress(e.target.value)}/>
             <br></br><br></br>
            
             <Button variant="warning" onClick={handlelogin}>Signup</Button>{' '}
             </center>
            </div>


        </div>
        </>
    )
}
import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export default function Homepage(){

const navigate = useNavigate();

const handlediverte =()=>{
  navigate ('/nikeshoes');
};

    return(
        <>
        <div className="main-div">

          <div className="text-div">
            <div className="text-div-1">
                <h4>&nbsp;&nbsp;WELCOME TO THE MULTIBAND &nbsp;&nbsp;SHOE MART WEBSITE</h4>
                <h6>&nbsp;Your Single Roof Of Soution To All Your Footware &nbsp;Need </h6>
                <h6>&nbsp;Check Out New Brands and Models below</h6>
            </div>
            <div className="image-div">
                <img src="./images/ecommerce/shoe1.png" alt="" className="shoe-img"></img>
            </div>
            
          </div>
        </div>
        <div className="brand-cart">
            <center>
            <h2>Our Brands</h2>
            </center>
         <div className="cart-holder">
             
            <div className="cart-div">
                <div>
                 <img src='./images/ecommerce/Nike-Logo.png' alt="" className="brand-image"></img>
                </div>
                <hr></hr>
                <div className="button-div">
                    <center>
                    <Button variant="primary" onClick={handlediverte}>EXPLORE</Button>{' '}
                  </center>
                </div> 
            </div>

            <div className="cart-div">
                <div>
                 <img src='./images/ecommerce/Adidas_logo.png' alt="" className="brand-image"></img>
                </div>
                <hr></hr>
                <div className="button-div">
                    <center>
                    <Button variant="primary">EXPLORE</Button>{' '}
                  </center>
                </div> 
            </div>

            <div className="cart-div">
                <div>
                 <img src='./images/ecommerce/Fila_logo.png' alt="" className="brand-image"></img>
                </div>
                <hr></hr>
                <div className="button-div">
                    <center>
                    <Button variant="primary">EXPLORE</Button>{' '}
                  </center>
                </div> 
            </div>

            <div className="cart-div">
                <div>
                 <img src='./images/ecommerce/puma.jpeg' alt="" className="brand-image"></img>
                </div>
                <hr></hr>
                <div className="button-div">
                    <center>
                    <Button variant="primary">EXPLORE</Button>{' '}
                  </center>
                </div> 
            </div>

            <div className="cart-div">
                <div>
                 <img src='./images/ecommerce/Clarks-logo.png' alt="" className="brand-image"></img>
                </div>
                <hr></hr>
                <div className="button-div">
                    <center>
                    <Button variant="primary">EXPLORE</Button>{' '}
                  </center>
                </div> 
            </div>

            <div className="cart-div">
                <div>
                 <img src='./images/ecommerce/SKECHERS_logo.png' alt="" className="brand-image"></img>
                </div>
                <hr></hr>
                <div className="button-div">
                    <center>
                    <Button variant="primary">EXPLORE</Button>{' '}
                  </center>
                </div> 
            </div>
           
          </div>
          
        </div>
        </>
    )
}
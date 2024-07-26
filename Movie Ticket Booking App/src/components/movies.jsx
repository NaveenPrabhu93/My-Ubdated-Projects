import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Movies(){

    const navigate = useNavigate();

const handlediverte =()=>{
  navigate ('/Seats');
};

    return(
        <>
        <div className="main-div-2">
            <h1 className="title">WELCOME TO MOVIE BOOKING WEB APPLICATION</h1>
                     <div className="movies-div-3">
            <div className="card-1">
                <img src="./images/indian 2.jpg"></img>
                <center>
                <p>INDIAN 2</p> 
                <button className="book" onClick={handlediverte}>BOOK</button>
                </center> 
            </div>
            <div className="card-1">
                <img src="./images/garudan.jpg"></img>
                <center>
                <p>GARUDAN</p> 
                <button className="book">BOOK</button>
                </center> 
            </div>
            <div className="card-1">
                <img src="./images/maharaja.jpg"></img>
                <center>
                <p>MAHARAJA</p> 
                <button className="book">BOOK</button>
                </center> 
            </div>
            <div className="card-1">
                <img src="./images/kalki.jpg"></img>
                <center>
                <p>KALKI</p> 
                <button className="book">BOOK</button>
                </center> 
            </div>
            <div className="card-1">
                <img src="./images/teenz.jpg"></img>
                <center>
                <p>TEENZ</p> 
                <button className="book">BOOK</button>
                </center> 
            </div>
            <div className="card-1">
                <img src="./images/wolverine.jpg"></img>
                <center>
                <p>WOLVERINE</p> 
                <button className="book">BOOK</button>
                </center> 
            </div>
            <div className="card-1">
                <img src="./images/long legs.jpg"></img>
                <center>
                <p>LONG LEGS</p> 
                <button className="book">BOOK</button>
                </center> 
            </div>
            <div className="card-1">
                <img src="./images/twister.jpg"></img>
                <center>
                <p>TWISTER</p> 
                <button className="book">BOOK</button>
                </center> 
            </div>
         </div>
        </div>
        </>
    )
}
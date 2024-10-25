import React from "react";
import { useNavigate } from "react-router-dom";



export default function Tabels(){

    const navigate = useNavigate();
    const goToAbout = () => {
        navigate("/bill");
      };
      
    return(
        <>
        <div className="back">
        <center>
        <p className="heading">
        Point Of Sale  For Hotels<br></br>
        Select Tables For Billing
        </p>
        
        <div className="main-div-table">
            
            <button className="table" onClick={goToAbout}>Table 1</button>
            <button className="table">Table 2</button>
            <button className="table">Table 3</button>
            <button className="table">Table 4</button>
            <button className="table">Table 5</button>
            <button className="table">Table 6</button>
            <button className="table">Table 7</button>
            <button className="table">Table 8</button>
            <button className="table">Table 9</button>
            <button className="table">Table 10</button>
            <button className="table">Table 11</button>
            <button className="table">Table 12</button>
            <button className="table">Table 13</button>
            <button className="table">Table 14</button>
            <button className="table">Table 15</button>
            <button className="table">Table 16</button>
            <button className="table">Table 17</button>
            <button className="table">Table 18</button>
            <button className="table">Table 19</button>
            <button className="table">Table 20</button>
        </div>
        </center>
        </div>
        </>
    )

}
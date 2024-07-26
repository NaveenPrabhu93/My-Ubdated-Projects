import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';




export default function Seat() {
  const [color1, setcolor1] = useState();
  const [color2, setcolor2] = useState();
  const [color3, setcolor3] = useState();
  const [color4, setcolor4] = useState();
  const [color5, setcolor5] = useState();
  const [color6, setcolor6] = useState();
  const [color7, setcolor7] = useState();
  const [color8, setcolor8] = useState();
  const [color9, setcolor9] = useState();
  const [color10, setcolor10] = useState();
  const [color11, setcolor11] = useState();
  const [color12, setcolor12] = useState();
  const [color13, setcolor13] = useState();
  const [color14, setcolor14] = useState();
  const [color15, setcolor15] = useState();
  const [color16, setcolor16] = useState();
  const [color17, setcolor17] = useState();
  const [color18, setcolor18] = useState();
  const [color19, setcolor19] = useState();
  const [color20, setcolor20] = useState();

  const [count, setcount] = useState(0);
  const[price, setprice] = useState(0);
  const [tax, settax]= useState(0);

  
 

  const handlebutton1 = () => {
    setcolor1((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) => (color1 === "red" ? prevCount - 1 : prevCount + 1));
  };
  const handlebutton2 = () => {
    setcolor2((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) => (color2 === "red" ? prevCount - 1 : prevCount + 1));
  };
  const handlebutton3 = () => {
    setcolor3((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) => (color3 === "red" ? prevCount - 1 : prevCount + 1));
  };
  const handlebutton4 = () => {
    setcolor4((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) => (color4 === "red" ? prevCount - 1 : prevCount + 1));
  };
  const handlebutton5 = () => {
    setcolor5((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) => (color5 === "red" ? prevCount - 1 : prevCount + 1));
  };
  const handlebutton6 = () => {
    setcolor6((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) => (color6 === "red" ? prevCount - 1 : prevCount + 1));
  };
  const handlebutton7 = () => {
    setcolor7((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) => (color7 === "red" ? prevCount - 1 : prevCount + 1));
  };
  const handlebutton8 = () => {
    setcolor8((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) => (color8 === "red" ? prevCount - 1 : prevCount + 1));
  };
  const handlebutton9 = () => {
    setcolor9((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) => (color9 === "red" ? prevCount - 1 : prevCount + 1));
  };
  const handlebutton10 = () => {
    setcolor10((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color10 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton11 = () => {
    setcolor11((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color11 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton12 = () => {
    setcolor12((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color12 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton13 = () => {
    setcolor13((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color13 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton14 = () => {
    setcolor14((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color14 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton15 = () => {
    setcolor15((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color15 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton16 = () => {
    setcolor16((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color16 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton17 = () => {
    setcolor17((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color17 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton18 = () => {
    setcolor18((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color18 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton19 = () => {
    setcolor19((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color19 === "red" ? prevCount - 1 : prevCount + 1
    );
  };
  const handlebutton20 = () => {
    setcolor20((prevColor) => (prevColor === "red" ? "" : "red"));
    setcount((prevCount) =>
      color20 === "red" ? prevCount - 1 : prevCount + 1
    );
  };


  useEffect(() => {
    setprice(() => count * 120);
  }, [count]); // <- add the count variable here

  useEffect(() => {
    settax(() => price * 120);
  }, [tax]); 

  

 

  const navigate = useNavigate();

const handlediverte =()=>{
  navigate ('/movies');
};

  return (
    <>
      <div className="main-div">
        <center>
        <button className="button-2" onClick={handlediverte}>Previous</button>
        <br></br><br></br>
        <div className="seat-div">
          <div>
            <p>Number Of Seats Selected :&nbsp;&nbsp;&nbsp;&nbsp;{count}</p>
            <p>Total Price: &nbsp;&nbsp;&nbsp;&nbsp;{price} </p>
            <p>Your Total Price With 12% Tax : &nbsp;&nbsp;&nbsp;&nbsp;{(price*12/100)+price}</p>
          </div>
          <div className="freespace"><hr className="line"></hr><p>Movie Will Be Displayed This Side</p></div>

          <div className="left-side">
            <button
              className="button-1"
              onClick={handlebutton1}
              style={{ backgroundColor: color1 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton2}
              style={{ backgroundColor: color2 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton3}
              style={{ backgroundColor: color3 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton4}
              style={{ backgroundColor: color4 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton5}
              style={{ backgroundColor: color5 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton6}
              style={{ backgroundColor: color6 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton7}
              style={{ backgroundColor: color7 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton8}
              style={{ backgroundColor: color8 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton9}
              style={{ backgroundColor: color9 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton10}
              style={{ backgroundColor: color10 }}
            ></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
          </div>

          <div className="middle-div"></div>

          <div className="right-side">
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
          </div>

          <div className="bottom-side">
            <button
              className="button-1"
              onClick={handlebutton11}
              style={{ backgroundColor: color11 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton12}
              style={{ backgroundColor: color12 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton13}
              style={{ backgroundColor: color13 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton14}
              style={{ backgroundColor: color14 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton15}
              style={{ backgroundColor: color15 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton16}
              style={{ backgroundColor: color16 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton17}
              style={{ backgroundColor: color17 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton18}
              style={{ backgroundColor: color18 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton19}
              style={{ backgroundColor: color19 }}
            ></button>
            <button
              className="button-1"
              onClick={handlebutton20}
              style={{ backgroundColor: color20 }}
            ></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
            <button className="button-1"></button>
          </div>
        </div>
        <br></br><br></br>
        <button className="button-2" >Proceed to Payment</button>
        </center>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


export default function Nikesandels(){
    const [sliderValue, setSliderValue] = useState();
 
    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    const navigate = useNavigate();

    const handlediverte =()=>{
    navigate ('/nikeshoes');
    };
    const handledivertesandels =()=>{
    navigate ('/nikesandels');
    };
    const handledivertesports =()=>{
    navigate ('/nikesports');
    };
         
     
 
    return(
        <>
        <div className="nike-shoes-main-div">
            <div className="nav-bar">
                <h6>Catagories</h6>
                <div className="sub-nav" onClick={handlediverte}><center>Shoes</center></div>
                <div className="sub-nav" onClick={handledivertesandels}><center>Sandles</center></div>
                <div className="sub-nav" onClick={handledivertesports}><center>Sports</center></div>
                <hr></hr>
                <h6>Price Range</h6>
                <Form.Range
                    value={sliderValue}
                    name='hello'
                    onChange={handleSliderChange}
                    className="custom-slider"
                    step={1000}
                    min={1000}
                    max={20000}/>
                <p>Price Value: {sliderValue}</p>
            </div>


            <div className="nike-card-holder">
            <div className="nike-card">
            <Card style={{ width: '250px', height:'450px' }}>
            <Card.Img variant="top" src="./images/ecommerce/nike/819352_001_P1.jpeg" />
            <Card.Body>
            <Card.Title>Nike Air</Card.Title>
            <Card.Text>
             Rs.15000 + TAX
            </Card.Text>
            </Card.Body>
     
            <Card.Body>
            <Card.Link href="#">VIEW</Card.Link>
            <Card.Link href="#">ADD TO CART</Card.Link>
            </Card.Body>
            </Card>
            </div>

            <div className="nike-card">
            <Card style={{ width: '250px', height:'450px' }}>
            <Card.Img variant="top" src="./images/ecommerce/nike/1308045_White_Glacier.webp" />
            <Card.Body>
            <Card.Title>Nike Air</Card.Title>
            <Card.Text>
             Rs.15000 + TAX
            </Card.Text>
            </Card.Body>
     
            <Card.Body>
            <Card.Link href="#">VIEW</Card.Link>
            <Card.Link href="#">ADD TO CART</Card.Link>
            </Card.Body>
            </Card>
            </div>

            <div className="nike-card">
            <Card style={{ width: '250px', height:'450px' }}>
            <Card.Img variant="top" src="./images/ecommerce/nike/2877745_Black_White.webp" />
            <Card.Body>
            <Card.Title>Nike Air</Card.Title>
            <Card.Text>
             Rs.15000 + TAX
            </Card.Text>
            </Card.Body>
     
            <Card.Body>
            <Card.Link href="#">VIEW</Card.Link>
            <Card.Link href="#">ADD TO CART</Card.Link>
            </Card.Body>
            </Card>
            </div>

            <div className="nike-card">
            <Card style={{ width: '250px', height:'450px' }}>
            <Card.Img variant="top" src="./images/ecommerce/nike/204527845_9607_0F682A8AB8914E3980865C3C299760F5.webp" />
            <Card.Body>
            <Card.Title>Nike Air</Card.Title>
            <Card.Text>
             Rs.15000 + TAX
            </Card.Text>
            </Card.Body>
     
            <Card.Body>
            <Card.Link href="#">VIEW</Card.Link>
            <Card.Link href="#">ADD TO CART</Card.Link>
            </Card.Body>
            </Card>
            </div>

            <div className="nike-card">
            <Card style={{ width: '250px', height:'450px' }}>
            <Card.Img variant="top" src="./images/ecommerce/nike/air-max-1-slides-nMLg3B.png" />
            <Card.Body>
            <Card.Title>Nike Air</Card.Title>
            <Card.Text>
             Rs.15000 + TAX
            </Card.Text>
            </Card.Body>
     
            <Card.Body>
            <Card.Link href="#">VIEW</Card.Link>
            <Card.Link href="#">ADD TO CART</Card.Link>
            </Card.Body>
            </Card>
            </div>

            <div className="nike-card">
            <Card style={{ width: '250px', height:'450px' }}>
            <Card.Img variant="top" src="./images/ecommerce/nike/black-green-victori-one-sandals.webp" />
            <Card.Body>
            <Card.Title>Nike Air</Card.Title>
            <Card.Text>
             Rs.15000 + TAX
            </Card.Text>
            </Card.Body>
     
            <Card.Body>
            <Card.Link href="#">VIEW</Card.Link>
            <Card.Link href="#">ADD TO CART</Card.Link>
            </Card.Body>
            </Card>
            </div>

            <div className="nike-card">
            <Card style={{ width: '250px', height:'450px' }}>
            <Card.Img variant="top" src="./images/ecommerce/nike/nike-Navy-Ultra-Comfort-Flip-Flop.webp" />
            <Card.Body>
            <Card.Title>Nike Air</Card.Title>
            <Card.Text>
             Rs.15000 + TAX
            </Card.Text>
            </Card.Body>
     
            <Card.Body>
            <Card.Link href="#">VIEW</Card.Link>
            <Card.Link href="#">ADD TO CART</Card.Link>
            </Card.Body>
            </Card>
            </div>

            <div className="nike-card">
            <Card style={{ width: '250px', height:'450px' }}>
            <Card.Img variant="top" src="./images/ecommerce/nike/nike-White-Air-Max-1-Slides.webp" />
            <Card.Body>
            <Card.Title>Nike Air</Card.Title>
            <Card.Text>
             Rs.15000 + TAX
            </Card.Text>
            </Card.Body>
     
            <Card.Body>
            <Card.Link href="#">VIEW</Card.Link>
            <Card.Link href="#">ADD TO CART</Card.Link>
            </Card.Body>
            </Card>
            </div>

            <div className="nike-card">
            <Card style={{ width: '250px', height:'450px' }}>
            <Card.Img variant="top" src="./images/ecommerce/nike/Screenshot-2024-01-05-at-10.52.20.webp" />
            <Card.Body>
            <Card.Title>Nike Air</Card.Title>
            <Card.Text>
             Rs.15000 + TAX
            </Card.Text>
            </Card.Body>
     
            <Card.Body>
            <Card.Link href="#">VIEW</Card.Link>
            <Card.Link href="#">ADD TO CART</Card.Link>
            </Card.Body>
            </Card>
            </div>

            </div>
            
        </div>
        </>
    )
}
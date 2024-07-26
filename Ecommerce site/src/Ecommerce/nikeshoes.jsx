import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

export default function Nikeshoes(){
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
                <div className="sub-nav"onClick={handledivertesports}><center>Sports</center></div>
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
            <Card.Img variant="top" src="./images/ecommerce/nike/air-max-systm-shoes-hLmQ85.png" />
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
            <Card.Img variant="top" src="./images/ecommerce/nike/custom-nike-air-force-1-high-by-you-shoes.jpeg" />
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
            <Card.Img variant="top" src="./images/ecommerce/nike/custom-nike-air-force-1-mid-by-you-shoes.png" />
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
            <Card.Img variant="top" src="./images/ecommerce/nike/dunk-low-retro-shoe-66RGqF.png" />
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
            <Card.Img variant="top" src="./images/ecommerce/nike/giannis-freak-5-older-basketball-shoes-r2FjbC.jpeg" />
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
            <Card.Img variant="top" src="./images/ecommerce/nike/revolution-7-road-running-shoes-Dfvsch.png" />
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
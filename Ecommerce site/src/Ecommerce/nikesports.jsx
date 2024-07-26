import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';


export default function Nikesports(){
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
                <div className="sub-nav" nClick={handledivertesports}><center>Sports</center></div>
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
            <Card.Img variant="top" src="./images/ecommerce/nike/custom-phantom-luna-2-elite-by-you.png" />
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
            <Card.Img variant="top" src="./images/ecommerce/nike/mercurial-superfly-9-club-multi-ground-high-top-football-boot-0Jt3bT.png" />
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
            <Card.Img variant="top" src="./images/ecommerce/nike/Rebel_66940601_black_hi-res.jpg" />
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
            <Card.Img variant="top" src="./images/ecommerce/nike/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-0hlF4x.png" />
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
            <Card.Img variant="top" src="./images/ecommerce/nike/tiempo-emerald-legend-10-academy-mg-low-top-football-boot-10hQTM.png" />
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
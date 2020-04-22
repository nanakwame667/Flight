import React from 'react';
import {Nav } from 'react-bootstrap';


function CarRentals (){
    return(
        <Nav className="mr-auto"defaultActiveKey="/Flights">
        <Nav.Item>
        <Nav.Link href="#Car rentals"  style={{marginLeft:'30px'}}>
        <img
        src={require('../../Images/car-icon1.png')}
        width="26"
        height="21"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        
        />
        Car Rental</Nav.Link>
        </Nav.Item>
        </Nav>
    )
}

export default CarRentals;
import React from 'react';
import {Nav} from 'react-bootstrap';


function Trips (){
    return(
        <Nav>
        <Nav.Item>
        <Nav.Link href="#myTrips" style={{marginLeft:'10px'}}>
        <img
        src={require('../../Images/trip.png')}
        width="25"
        height="25"
        className="d-inline-block align-top mr-1"
        alt=""
        
      />
        My trips</Nav.Link>
        </Nav.Item>
        </Nav>
    )
}

export default Trips;
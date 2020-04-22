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
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        
      />
        My trips</Nav.Link>
        </Nav.Item>
        </Nav>
    )
}

export default Trips;
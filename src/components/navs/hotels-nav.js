import React from 'react';
import {Nav} from 'react-bootstrap';


function Hotels(){
    return(
        <Nav  className="mr-auto" variant="outline-tabs">
        <Nav.Item>
            <Nav.Link href="#pricing"  style={{marginLeft:'30px'}}>
            <img
            src={require('../../Images/hotel-icon.webp')}
            width="30"
            height="25"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            
          />
            Hotels</Nav.Link>
            </Nav.Item>
            </Nav>
    )
}


export default Hotels;
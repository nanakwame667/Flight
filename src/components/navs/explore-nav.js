import React from 'react';
import {Nav} from 'react-bootstrap';

function Explore (){
    return(
        <Nav className="mr-auto">
        <Nav.Item>
        <Nav.Link href="#explore"  style={{marginLeft:'20px'}}>
        <img
        src={require('../../Images/explore-icon1.webp')}
        width="25"
        height="25"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        
      />
        Explore</Nav.Link>
        </Nav.Item>
        </Nav>
    )
}

export default Explore;
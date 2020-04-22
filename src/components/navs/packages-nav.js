import React from 'react';
import {Nav} from 'react-bootstrap';

function Packages (){
    return(
        <Nav>
        <Nav.Item>
        <Nav.Link href="#Packages"  style={{marginLeft:'20px'}}>
        <img
        src={require('../../Images/package-icon1.png')}
        width="20"
        height="22"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        
      />
        Packages</Nav.Link>
        </Nav.Item>
        </Nav>
    )
}

export default Packages;
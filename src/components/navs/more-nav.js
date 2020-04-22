import React from 'react';
import {Nav,NavDropdown} from 'react-bootstrap';

function More (){
    return(
        <Nav>
        <NavDropdown title="More" id="collasible-nav-dropdown"  style={{marginLeft:'20px'}}>
              <NavDropdown.Item href="#action/3.1"> Deals </NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.2"> Help </NavDropdown.Item>
             
            </NavDropdown>
        </Nav>
    )
}

export default More;
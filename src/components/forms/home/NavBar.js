import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import {Nav,Container} from 'react-bootstrap';


import Flight from '../../navs/flight-nav';
import Login from '../../navs/login-nav';
import Trips from '../../navs/myTrips-nav';

function NavBar (){
    return(
        <div style={{flex:1}}>
        <Container>
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/" style={{marginLeft:'150px'}}>Flight-Booky</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}> 
            <Flight/>
            <Trips/>
            <Login/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>  
      </Container>
        </div>
    )
}

export default NavBar;


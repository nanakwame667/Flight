import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import {Nav,Container} from 'react-bootstrap';

import CarRentals from '../../navs/car-rentals-nav';
import Explore from '../../navs/explore-nav';
import Flight from '../../navs/flight-nav';
import Hotels from '../../navs/hotels-nav';
import Login from '../../navs/login-nav';
import More from '../../navs/more-nav';
import Trips from '../../navs/myTrips-nav';
import Packages from '../../navs/packages-nav';

function NavBar (){
    return(
        <div style={{flex:1}}>
        <Container>
        <Navbar collapseOnSelect fixed="top"   expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/" style={{marginLeft:'150px'}}>Flight-Booky</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"> 
            <Flight/>
            <Hotels/>
            <CarRentals/>
            <Packages/>
            <Explore/>
            <More/>
            <Nav style={{marginLeft:'120px'}}>
            <Trips/>
            <Login/>
            </Nav>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>  
      </Container>
        </div>
    )
}

export default NavBar;


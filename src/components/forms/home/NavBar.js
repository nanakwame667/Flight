import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import Flight from '../../navs/flight-nav';
import Hotels from '../../navs/hotels-nav';
import CarRentals from '../../navs/car-rentals-nav';
import Packages from '../../navs/packages-nav';
import Explore from '../../navs/explore-nav';
import More from '../../navs/more-nav';
import Trips from '../../navs/myTrips-nav';
import Login from '../../navs/login-nav';

function NavBar (){
    return(
        <div style={{flex:1}}>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
        <Nav className="mr-auto" defaultActiveKey="/Flight">
        <Navbar.Brand href="/" style={{marginLeft:'150px'}}>Flight-Booky</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"defaultActiveKey="/Flights">
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
        </Nav>
      </Navbar>  
        </div>
    )
}

export default NavBar;


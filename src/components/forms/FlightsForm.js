import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import {Card,Nav,NavDropdown,Navbar,Form,Row,Col,Button,Dropdown,DropdownButton} from 'react-bootstrap';

import FlightSearch from './FlightSearch';








function FlightsForm (props){
return(
    <Container fluid="1000px">
    <Card>
    <Card.Img src={require('../../Images/bg.jpg')} alt="backgroundImg"/>
    <Card.ImgOverlay>
    <Card.Body>
    <br/>
    <Card.Text style={{fontSize:'45px',marginTop:'100px',marginLeft:'70px',color:'#fff'}}> Find and compare cheap <br/>flights</Card.Text>
    <br/>
    <Nav bg="outline-primary" variant="light"  style={{marginLeft:'60px'}}>
    <FlightSearch/>
  
  </Nav>
  
    </Card.Body>
    </Card.ImgOverlay>
    </Card>
    </Container>
)
}

export default FlightsForm;
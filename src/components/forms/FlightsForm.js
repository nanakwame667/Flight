import React from 'react';

import Container from 'react-bootstrap/Container';
import {Card,Nav,NavDropdown,Navbar,Form} from 'react-bootstrap';

import HomeCards from './home/HomeCards';
import HomeFooter from './home/footer';

function FlightsForm (){
return(
    <Container fluid="1000px">
    <Card>
    <Card.Img src={require('../../Images/background.jpg')} alt="backgroundImg"/>
    <Card.ImgOverlay>
    <Card.Body>
    <Card.Text style={{fontSize:'50px',marginTop:'100px',marginLeft:'70px'}}> Find and Compare Cheap Flights</Card.Text>
    <br/>
    <Nav style={{marginLeft:'70px'}}>
    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  <NavDropdown.Divider />
  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>
<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>
  </Nav>
  <Navbar className="bg-light justify-content-between" expand="lg" bg="primary" variant="light">
  <Navbar.Brand href="#">Navbar</Navbar.Brand>
  <Form inline></Form>
  </Navbar>
    </Card.Body>
    </Card.ImgOverlay>
    </Card>
    </Container>
)
}

export default FlightsForm;
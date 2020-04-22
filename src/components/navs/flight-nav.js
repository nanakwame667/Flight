import React from 'react';
import {Nav} from 'react-bootstrap';


function Flight(){
    return(
      <div>
        <Nav className="mr-auto" variant="outline-tabs">
        <Nav.Item>
          <Nav.Link href="/Flight" style={{marginLeft:'30px'}}>
          <img
          src={require('../../Images/flight-icon.png')}
          width="30"
          height="25"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          
        />
          Flights</Nav.Link>
          </Nav.Item>
          </Nav>
        
          </div>
    )
}
export default Flight;
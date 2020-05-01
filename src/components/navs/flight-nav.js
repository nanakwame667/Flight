import React from 'react';

import {Nav} from 'react-bootstrap';


function Flight(){
    return(
      <div>
        <Nav className="mr-auto-active" variant="outline-tabs" expand="lg">
        <Nav.Item>
          <Nav.Link href='/flight' className="txt2 hov1"> <img
            src={require('../../Images/flight-icon.png')}
            width="30"
            height="25"
            className="d-inline-block align-top mr-1"
            alt=""/>
            Flights
          </Nav.Link>
          </Nav.Item>
          </Nav>
          </div>
    )
}
export default Flight;
import React from 'react';
import {Nav} from 'react-bootstrap';


function Login (props){
    return(
      <Nav>
        <Nav.Link eventKey={2} href="/logIn">
            <img
            src={require('../../Images/login-icon1.png')}
            width="25"
            height="25"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            
          />
              Sign In
            </Nav.Link>
        </Nav>
        
    )
}

export default Login;
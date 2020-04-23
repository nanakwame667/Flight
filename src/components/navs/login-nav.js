import React,{useState} from 'react';

import {Nav} from 'react-bootstrap';

import LoginForm from './../forms/LoginForm';


function Login (props){
  const [modalShow, setModalShow] = useState(false);

    return(
      <div>
      <Nav>
        <Nav.Link eventKey={2} onClick={() => setModalShow(true)}>
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
        <LoginForm 
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </div>
    )
}

export default Login;
import React, {useState, useContext} from 'react';

import {Nav, NavDropdown} from 'react-bootstrap';

import UserForm from '../forms/UserForm';

import AppContext from '../../config/app-context';

function Login (props){
    let context = useContext(AppContext);
    const [isShow, setShowModal] = useState(false);

    return(
      <div  style={{marginRight: '100px'}}>
        <Nav>
          { !context.user && <Nav.Link eventKey={2} onClick={() => setShowModal(true)}>
            <img
            src={require('../../Images/login-icon1.png')}
            width="25"
            height="25"
            className="d-inline-block align-top mr-1"
            alt=""/>
              { context.user ? context.user.firstname : 'Sign In' }
          </Nav.Link> 
          }
          { context.user &&<div>
              <Nav.Link className="d-inline-block align-top">
                <img
                src={require('../../Images/login-icon1.png')}
                width="25"
                height="25"
                className="d-inline-block align-top"
                alt=""/>
              </Nav.Link> 
              <NavDropdown title={context.user.firstname} id="collasible-nav-dropdown" className="d-inline-block align-top">
                <NavDropdown.Item href="/help"> Help </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={()=>{context.updateState({user:null, token:null})}}> Logout </NavDropdown.Item>
              </NavDropdown></div>
          }
        </Nav>
        <UserForm show={isShow} showModal={ (state)=>{ setShowModal(state) } } onHide={() => setShowModal(false)}/>
        </div>
    )
}

export default Login;
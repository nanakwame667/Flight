import React, {useState, useContext} from 'react';

import {Nav} from 'react-bootstrap';

import UserForm from '../forms/UserForm';

import AppContext from '../../config/app-context';

function Login (props){
    let context = useContext(AppContext);
    const [isShow, setShowModal] = useState(false);
    if  (!context.showUserModal)
      context.updateState({showUserModal: (state)=>setShowModal(state)});
    console.log(context);

    return(
     
      <div>
      <Nav>
        <Nav.Link eventKey={2} onClick={() => !context.user && setShowModal(true)}>
            <img
            src={require('../../Images/login-icon1.png')}
            width="25"
            height="25"
            className="d-inline-block align-top mr-1"
            alt="Welcome"/>
              { context.user ? context.user.firstname : 'Sign In' }
            </Nav.Link>
        </Nav>
        <UserForm show={isShow} onHide={() => setShowModal(false)}
        />
        </div>
    )
}

export default Login;
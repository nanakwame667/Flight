import React, {useContext} from 'react';

import {Nav} from 'react-bootstrap';

import AppContext from '../../config/app-context';
    

function Trips (){
    let context = useContext(AppContext);
    return(
        context.user && <Nav>
        <Nav.Item>
        <Nav.Link href="/reservations" className="txt2 hov1">
        <img
        src={require('../../Images/trip.png')}
        width="25"
        height="25"
        className="d-inline-block align-top mr-1"
        alt="" />
        Reservations</Nav.Link>
        </Nav.Item>
        </Nav>
    )
}

export default Trips;
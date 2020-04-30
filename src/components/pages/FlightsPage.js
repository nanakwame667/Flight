import React from 'react';

import FlightSearch from './../forms/FlightSearch';
import NavBar from '../forms/home/NavBar';


function FlightsPage(){
    return(
        <div>
            <NavBar/>
            <FlightSearch/>
        </div>
    )
}

export default FlightsPage;
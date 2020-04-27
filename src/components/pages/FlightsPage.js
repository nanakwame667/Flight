import React from 'react';

import FlightsForm from './../forms/FlightsForm';
import NavBar from '../forms/home/NavBar';

function FlightsPage(){
    return(
        <div>
            <NavBar/>
            <FlightsForm/>
        </div>
    )
}

export default FlightsPage;
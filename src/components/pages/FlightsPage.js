import React from 'react';

import FlightsForm from './../forms/FlightsForm';
import SearchResults from './../forms/SearchResults';
import NavBar from '../forms/home/NavBar';


function FlightsPage(){
    return(
        <div>
            <NavBar/>
            <FlightsForm/>
            <SearchResults/>
        </div>
    )
}

export default FlightsPage;
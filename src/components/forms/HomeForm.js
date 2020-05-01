import React from 'react';

import Container from 'react-bootstrap/Container';

import HomeCarousel from './home/Carouselhome';
import HomeCards from './home/HomeCards';
import HomeFooter from './home/footer';
import TrendingCities from './home/trendingCards';


function HomeForm (){
    return(
        
        <Container fluid="1000px" style={{backgroundColor:'#F0FFF0'}}>
        <HomeCarousel/>
        <br/>
        <div style={{textAlign:'center',marginTop:'50px'}}>
        <h3 style={{fontSize:'35px',weight:'bold'}}>Travel inspiration</h3>
        <p style={{fontSize:'25px'}} >Our latest travel tips, expert hacks and industry insights <br/>to help make your journey one to remember</p>
        </div>
        <br/>
        <HomeCards/>
        <br/><br/>
        <div style={{textAlign:'center',marginTop:'50px'}}>
        <h3 style={{fontSize:'35px',weight:'bold'}}>Trending Cities</h3>
        <p style={{fontSize:'25px'}} >The most searched cities on Flight-Booky</p>
        </div>
        <TrendingCities/>
        <br/><br/>
        <footer>
        <HomeFooter/>
        </footer>

</Container>

    )
}

export default HomeForm;


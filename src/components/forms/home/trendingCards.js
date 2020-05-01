import React from 'react';

import {Card,CardDeck,Container} from 'react-bootstrap';

export default function TrendingCities(){
    return(
        <Container>
        <CardDeck>
        <Card style={{width:'450px',height:'280px',display:'flex',borderRadius:'12px'}}>
        <Card.Img variant="top" src={require('../../../Images/city1.jfif')} width='50px' height='190px'/>
        <Card.Body>The gray landmark building<br/>of Paris</Card.Body>
        </Card>
        <Card style={{width:'450px',height:'280px',borderRadius:'12px'}}>
        <Card.Img variant="top" src={require('../../../Images/city2.jfif')} width='50px' height='190px'/>
        <Card.Body>The famous tower<br/>Eiffel Tower London</Card.Body>
        </Card>
        <Card style={{width:'450px',height:'280px',borderRadius:'12px'}}>
        <Card.Img variant="top" src={require('../../../Images/city3.jfif')} width='50px' height='190px'/>
        <Card.Body>The Cloud Gate<br/>in the Chicago town</Card.Body>
        </Card>
        <Card style={{width:'450px',height:'280px',borderRadius:'12px'}}>
        <Card.Img variant="top" src={require('../../../Images/city4.jfif')} width='50px' height='190px'/>
        <Card.Body>Currently one of the finest<br/>Cities in Chicago</Card.Body>
        </Card>
        </CardDeck><br/>
        <CardDeck>
        <Card style={{width:'450px',height:'280px',borderRadius:'12px'}}>
        <Card.Img variant="top" src={require('../../../Images/city5.jfif')} width='50px' height='190px'/>
        <Card.Body>The beautiful waterfall <br/> in the Hawaii Forest</Card.Body>
        </Card>
        <Card style={{width:'450px',height:'280px',borderRadius:'12px'}}>
        <Card.Img variant="top" src={require('../../../Images/city6.jfif')} width='50px' height='190px'/>
        <Card.Body>The finest and refreshing <br/>Beach resort in Hawaii</Card.Body>
        </Card>
        <Card style={{width:'450px',height:'280px',borderRadius:'12px'}}>
        <Card.Img variant="top" src={require('../../../Images/city7.jfif')} width='50px' height='190px'/>
        <Card.Body>The legendary<br/>Mount Fuji in Japan</Card.Body>
        </Card>
        <Card style={{width:'450px',height:'280px',borderRadius:'12px'}}>
        <Card.Img variant="top" src={require('../../../Images/city8.jfif')} width='30px' height='190px'/>
        <Card.Body>Welcome to the New York <br/> State Empire Building</Card.Body>
        </Card>
        </CardDeck>
        </Container>
    )
}
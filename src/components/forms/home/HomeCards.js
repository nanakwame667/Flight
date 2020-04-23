import React from 'react';

import {Card,CardDeck} from 'react-bootstrap';


function HomeCards (){
    return(
        <CardDeck collapseOnselect style={{width:'60%',marginLeft:'300px', alignContent:'center'}}>
        <Card style={{height:'60%'}}>
        <Card.Img variant="top" src={require('../../../Images/tour3.jpg')}  />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <small className="text-muted">Last updated 3 mins ago</small>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{height:'60%'}}>
          <Card.Img variant="top" src={require('../../../Images/tour3.jpg')}  />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <small className="text-muted">Last updated 3 mins ago</small>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{height:'60%'}}>
          <Card.Img variant="top" src={require('../../../Images/tour3.jpg')}  />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <small className="text-muted">Last updated 3 mins ago</small>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{height:'60%'}}>
          <Card.Img variant="top" src={require('../../../Images/tour3.jpg')}  />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <small className="text-muted">Last updated 3 mins ago</small>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    )
}

export default HomeCards;
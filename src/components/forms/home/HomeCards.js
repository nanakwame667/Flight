import React from 'react';

import {Card,CardDeck,Container,Button} from 'react-bootstrap';


function HomeCards (){
    return(
      <Container fluid>
        <CardDeck collapseOnselect style={{width:'80%',marginLeft:'160px', alignContent:'center'}}>
        <Card style={{height:'70%'}}>
          <Card.Img variant="top" src={require('../../../Images/people.jpg')} style={{height:'200px'}} />
          <Card.Body>
            <small className="text-muted">Last updated 3 mins ago</small>
            <Card.Text>
              This is a wider card with supporting text
            </Card.Text>
          </Card.Body>
        </Card><Card style={{height:'70%'}}>
        <Card.Img variant="top" src={require('../../../Images/tour1.jpg')} style={{height:'200px'}} />
        <Card.Body>
          <small className="text-muted">Last updated 3 mins ago</small>
          <Card.Text>
            This is a wider card with supporting text
          </Card.Text>
        </Card.Body>
      </Card><Card style={{height:'70%'}}>
      <Card.Img variant="top" src={require('../../../Images/people1.jpg')} style={{height:'200px'}} />
      <Card.Body>
        <small className="text-muted">Last updated 3 mins ago</small>
        <Card.Text>
          This is a wider card with supporting text
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{height:'60%'}}>
          <Card.Img variant="top" src={require('../../../Images/tour3.jpg')} style={{height:'200px'}} />
          <Card.Body>
            <small className="text-muted">Last updated 3 mins ago</small>
            <Card.Text>
              This is a wider card with supporting text
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br/>
      <Button variant="outline-primary" style={{marginLeft:'660px'}}>More inspiration</Button>{' '}
      </Container>
    )
}

export default HomeCards;
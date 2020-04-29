import React from 'react';

import {Card,CardDeck,Container,Button} from 'react-bootstrap';

function HomeCards (){
    return(

      <Container fluid="true">
        <CardDeck style={{width:'80%',marginLeft:'160px', alignContent:'center'}}>
        <Card style={{height:'70%',borderRadius:'15px'}} className="shadow-sm p-3 mb-5 bg-white rounded">

          <Card.Img variant="top" src={require('../../../Images/people.jpg')} style={{height:'200px'}}/>
          <Card.Body>
            <small className="text-muted">Last updated 3 mins ago</small>
            <Card.Text>
              This is a wider card with supporting text
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{height:'70%',borderRadius:'15px'}} className=" bg-white rounded">
        <Card.Img variant="top" src={require('../../../Images/tour1.jpg')} style={{height:'200px'}} />
        <Card.Body>
          <small className="text-muted">Last updated 3 mins ago</small>
          <Card.Text>
            This is a wider card with supporting text
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{height:'70%',borderRadius:'15px'}} className=" bg-white rounded">
      <Card.Img variant="top" src={require('../../../Images/people1.jpg')} style={{height:'200px'}} />
      <Card.Body>
        <small className="text-muted">Last updated 3 mins ago</small>
        <Card.Text>
          This is a wider card with supporting text
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{height:'60%',borderRadius:'15px'}} className=" bg-white rounded">
          <Card.Img variant="top" src={require('../../../Images/tour3.jpg')} style={{height:'200px'}} />
          <Card.Body>
            <small className="text-muted">Last updated 3 mins ago</small>
            <Card.Text>
              This is a wider card with supporting text
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br/><br/>
      <Button variant="outline-primary" style={{marginLeft:'660px',borderRadius:'5px'}} >More inspiration</Button>{' '}
      </Container>
    )
}

export default HomeCards;
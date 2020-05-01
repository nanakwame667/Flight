import React from 'react';

import {Card,CardDeck,Container,Button} from 'react-bootstrap';

function HomeCards (){
    return(

      <Container fluid="true">
        <CardDeck style={{width:'80%',marginLeft:'160px', alignContent:'center'}}>
        <Card style={{height:'70%',borderRadius:'15px'}} className="bg-white rounded">
          
          <Card.Img variant="top" src={require('../../../Images/people.jpg')} style={{height:'200px',transition:"1s"}}className="hover"/>
          
          <Card.Body>
            <small className="text-muted">Last updated 3 mins ago</small>
            <Card.Text>
              Travel and have an encounter 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{height:'70%',borderRadius:'15px'}} className="bg-white rounded">
        <Card.Img variant="top" src={require('../../../Images/tour1.jpg')} style={{height:'200px'}} />
        <Card.Body>
          <small className="text-muted">Last updated 3 mins ago</small>
          <Card.Text>
            Have a stand tour to the finest sites
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{height:'70%',borderRadius:'15px'}} className="bg-white rounded">
      <Card.Img variant="top" src={require('../../../Images/people1.jpg')} style={{height:'200px'}} />
      <Card.Body>
        <small className="text-muted">Last updated 3 mins ago</small>
        <Card.Text>
          Enjoy some time with family
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{height:'60%',borderRadius:'15px'}} className="bg-white rounded">
          <Card.Img variant="top" src={require('../../../Images/tour3.jpg')} style={{height:'200px'}} />
          <Card.Body>
            <small className="text-muted">Last updated 3 mins ago</small>
            <Card.Text>
              Discover more with Flight-Booky
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br/><br/>
      <center>
              <Button variant="outline-primary align-center" style={{borderRadius:'5px'}} >More inspiration</Button>
      </center>
      </Container>
    )
}

export default HomeCards;
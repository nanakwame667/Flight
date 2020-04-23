import React from 'react';

import {Row,Col} from 'react-bootstrap';
import {Card} from 'react-bootstrap';


function HomeFooter(){
    return(
      <Card bg="primary" variant="light" style={{height:'30rem'}} fluid>
      <Card.Body style={{textAlign:'center',marginLeft:'250px'}}>
      <br/><br/>
      <Row>
      <Col md="3">
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      </Col>
      <Col md="3">
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      </Col>
      <Col md="3">
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      </Col>
    </Row>
    <br/><br/>
    <Row>
    <Col md="3">
    <Card.Link href="#" style={{color:'black'}} >Privacy</Card.Link>
    </Col>
    <Col md="3">
    <Card.Link href="#" style={{color:'black'}} >Terms & Conditions</Card.Link>
    </Col>
    <Col md="3">
    <Card.Link href="#" style={{color:'black'}} >AdChoice</Card.Link>
    </Col>
    </Row>
      </Card.Body>
     
      <footer style={{textAlign:'center'}}>
     <Card.Text>TechUp-Studio  &copy; {new Date().getFullYear()} Copyright</Card.Text>
    </footer>
    
     </Card>
    )
}

export default HomeFooter;
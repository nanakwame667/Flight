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
    <br/><br/><br/>
    <Row style={{marginInline:'10px',marginTop:'15px'}}>
    <Col md="9">
    <Card.Link href="#" style={{color:'black'}} >Privacy</Card.Link>
    <Card.Link href="#" style={{color:'black'}} >Terms & Conditions</Card.Link>
    <Card.Link href="#" style={{color:'black'}} >AdChoice</Card.Link>
    </Col>
    </Row>
    <br/><br/>
    <Row>
    <Col md="9">
    <img src={require('../../../Images/facebook.png')}
    alt="FaceBook"
    width="50"
    height="50"
    style={{marginRight:'15px'}} 
    />
    <img src={require('../../../Images/twitter.webp')}
    alt="twitter"
    width="40"
        height="40"
        style={{marginRight:'15px'}} 
    />
    <img
    src={require('../../../Images/instagram.png')}
    alt="instagram"
    width="50"
        height="40"
        style={{marginRight:'15px'}} 
    />
    <img
    src={require('../../../Images/github.png')}
    alt="github"
    width="40"
        height="40"
    />
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
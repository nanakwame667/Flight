import React from 'react';

import {Row,Col} from 'react-bootstrap';
import {Card} from 'react-bootstrap';


function HomeFooter(){
    return(
      <Card bg="primary" variant="light" style={{height:'60rem',width:'100%'}} fluid="true">
      <Card.Body style={{textAlign:'center',marginLeft:'250px'}}>
      <br/><br/>
      <Row>
      <Col md="3">
      <Card.Title style={{fontFamily:'sans-serif',fontSize:'35px',color:'#FFD700'}}>Explore</Card.Title>
      
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Cities</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>City Breaks</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Airports</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Countries/Regions</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Airline</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Flights</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Hotels</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Car Hire</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>App</a><br/>
      
      </Col>
      <Col md="3">
      <Card.Title style={{fontFamily:'sans-serif',fontSize:'35px',color:'#FFD700'}}>Company</Card.Title>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>About Us</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Why Flight-Booky?</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Media</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Our people</a><br/>
      <a className="txt2 hov1"href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Sustainability</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Brand Story</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Company Details</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Jobs</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Travel Features & News</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Cookies Policy</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Privacy Policy</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Terms of Service</a>
      </Col>
      <Col md="3">
      <Card.Title style={{fontFamily:'sans-serif',fontSize:'35px',color:'#FFD700'}}>Help</Card.Title>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Help</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Privacy Settings</a><br/>
      <a className="txt2 hov1" href='#cities' style={{fontSize:'20px',fontFamily:'sans-serif',color:'#fff'}}>Security</a>
      </Col>
    </Row>
    <br/><br/><br/>
    <Row style={{marginInline:'10px',marginTop:'15px'}}>
    <Col md="9">
    <Card.Link href="#" style={{color:'#DAA520',fontFamily:'sans-serif',fontSize:'20px'}} >Privacy</Card.Link>
    <Card.Link href="#" style={{color:'#DAA520',fontFamily:'sans-serif',fontSize:'20px'}} >Terms & Conditions</Card.Link>
    <Card.Link href="#" style={{color:'#DAA520',fontFamily:'sans-serif',fontSize:'20px'}} >AdChoice</Card.Link>
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
     
      <footer style={{textAlign:'center',colo:'#E6E6FA'}}>
     <Card.Text style={{fontSize:'19px',fontFamiy:'sans-serif'}}>TechUp-Studio  &copy; {new Date().getFullYear()} Copyright</Card.Text>
    </footer>
    
     </Card>
    )
}

export default HomeFooter;
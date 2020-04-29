import React,{Component} from  'react';

import 
{Nav,Navbar,NavDropdown,Form,Alert,InputGroup,Button,Col,Container,DropdownButton,Dropdown,Card,CardGroup,CardDeck} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';

import { RangeDatePicker,SingleDatePicker } from 'react-google-flight-datepicker';

import NavBar from '../forms/home/NavBar';

class SearchResults extends Component{
    constructor(props) {
        super(props);
        
    this.state={
        current1:'Round-trip',
        current2:'Adult',
        current3:'Economy',
        title1:'Best',
        tripType: 'round',
        show1: true,
            show2: false,
            show3: false
    }
}

twoFun=(event)=>{
    return(
        this.handleChange1(event),
        this.showState2anx(event),
        this.showState1(event)
    )
}
twoFun1=(event)=>{
    return(
        this.handleChange1(event),
        this.showState1anx(event),
        this.showState2(event)
    )
}

    handleChange1=(event)=>{
        this.setState({current1:event})
    }
    handleChange2=(event)=>{
        this.setState({current2:event})
    }
    handleChange3=(event)=>{
        this.setState({current3:event})
    }
    // sorting dropdown
    handleSort1=(event)=>{
        this.setState({title1:event})
    }
    // sorting dropdown
    showState1=()=>{
        this.setState({show1:true})
    }
    showState1anx=()=>{
        this.setState({show1:false})
    }
    showState2=()=>{
        this.setState({show2:true})
    }
    showState2anx=()=>{
        this.setState({show2:false})
    }
    render(){
        const Title1=this.state.current1;
        const Title2=this.state.current2;
        const Title3=this.state.current3;
        const Title4=this.state.title1;
    return(
        <div>
        <NavBar/><br/><br/>
        <Container style={{backgroundColor:'#20B2AA',color:'#fff',marginTop:'6px'}}fluid>
        <Nav style={{marginLeft:'40px',}}>
            <NavDropdown 
            style={{fontSize:'130%'}}
            title={Title1} 
            id="collasible-nav-dropdown" 
           >
            <NavDropdown.Item value="round"  eventKey={'Round-trip'}  onSelect={this.twoFun}checked={this.state.tripType === 'round'} onChange={this.tripTypeChange} >Round-trip</NavDropdown.Item>
            <NavDropdown.Item value="One-way" eventKey={'One-way'} onSelect={this.twoFun1} checked={this.state.tripType === 'oneway'} onChange={this.tripTypeChange}>One-way</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown value={this.state.adults} onChange={this.adultsChange} min={1} max={15} data-val="left"  id="collasible-nav-dropdown" title={Title2}>
          <NavDropdown.Item href="#action/3.1" eventKey={'Adult'} onSelect={this.handleChange2}>Adult</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" eventKey={'Seniors'} onSelect={this.handleChange2}>Seniors</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" eventKey={'Youth'} onSelect={this.handleChange2}>Youth</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" eventKey={'Child'} onSelect={this.handleChange2}>Child</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" eventKey={'Seat Infant'} onSelect={this.handleChange2}>Seat Infant</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" eventKey={'Lap Infant'} onSelect={this.handleChange2}>Lap Infant</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown  id="collasible-nav-dropdown" title={Title3}>
        <NavDropdown.Item  eventKey={'Economy'} onSelect={this.handleChange3}>Economy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" eventKey={'Premium Economy'} onSelect={this.handleChange3}>Premium Economy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" eventKey={'Business'} onSelect={this.handleChange3}>Business</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" eventKey={'First'} onSelect={this.handleChange3}>First</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" eventKey={'Multiple'} onSelect={this.handleChange3}>Multiple</NavDropdown.Item>
        </NavDropdown>
            </Nav>
            
            
            <div style={{display:'flex',marginTop:'5px'}}fluid>
            <Navbar className="justify-content-between" expand="xl" 
    style={{
    width:'100rem',
    height:'75px',
    marginLeft:'12px',
    borderRadius:'5px'
    }} >
    
    <Alert show={this.state.show1} style={{marginTop:'15px'}}>
    <Form style={{marginTop:'15px'}} >
  <Form.Row>
    <Form.Group as={Col}>
    
        <InputGroup >
        <Form.Control
        style={{width:'221px',height:'67px',marginRight:'5px',borderRadius:'7px'}}
        type="text"
        placeholder="From?"
        />
        <Button style={{width:'45px',height:'55px',marginLeft:'5px',marginTop:'7px'}} variant='outline-primary'><img 
        src={require('../../Images/direction1.png')} 
        alt="direction"
        width="15px"
        height="15px"
        
        /></Button>
        <Form.Control
        style={{width:'221px',height:'67px',marginRight:'10px',marginLeft:'20px',borderRadius:'7px'}}
        type="text"
        placeholder="To?"
        />
        <div style={{width:'35rem'}}>
        <RangeDatePicker
        style={{width:'15rem'}}
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}/></div>
        </InputGroup>
       
    </Form.Group>
  </Form.Row>
</Form>
</Alert>
<Alert show={this.state.show2} style={{marginTop:'15px'}}>
<Form style={{marginTop:'15px'}} >
<Form.Row>
  <Form.Group as={Col}>
      <InputGroup>
      <Form.Control
      style={{width:'221px',height:'67px',marginRight:'12px',borderRadius:'7px'}}
      type="text"
      placeholder="From?"
      />
      <Button style={{width:'45px',height:'55px',marginLeft:'5px',marginTop:'7px'}} variant='outline-primary'><img 
      src={require('../../Images/direction1.png')} 
      alt="direction"
      width="15px"
      height="15px"
      
      /></Button>
      <Form.Control
      style={{width:'221px',height:'67px',marginRight:'5px',marginLeft:'20px',borderRadius:'7px'}}
      type="text"
      placeholder="To?"
      />
      <div style={{width:'29rem',height:'2rem',marginLeft:'5px'}}>
      <SingleDatePicker startDate={new Date(2020, 0, 15)} />
      </div>
      </InputGroup>
  </Form.Group>
</Form.Row>
</Form>
</Alert>
  </Navbar>
  <div >
  <Button variant="primary"
   style={{marginTop:'3px',width:'10rem',height:'4rem',borderRadius:'350px',textAlign:'center'}} 
   href="/flights/Search" exact component={SearchResults}
   >Search</Button>{' '}
  </div>
  </div>
  </Container>
  <Container style={{backgroundColor:'#F0FFF0',height:'100rem'}} fluid>
    <div><br/>
    <div style={{display:'flex'}}>
    <Button variant="outline-primary" style={{height:'40px'}}>
    <div style={{display:'flex'}}>
    <img src={require('../../Images/bell-icon.png')}
    width='20px' height='20px'
    alt='bell'/>
    <div style={{fontSize:'18px',color:'#4682B4',fontWeight:'bold'}}>Get Price Alerts</div>
    </div>
    </Button>
    <div style={{display:'flex',alignItems:'center',marginLeft:'950px'}}>
    <p style={{marginRight:'10px'}}>Sort By</p>
    <DropdownButton size='md' title={Title4} variant='outline-primary'
    >
    <Dropdown.Item href="#/action-1" eventKey={'Best'} onSelect={this.handleSort1}>Best</Dropdown.Item>
    <Dropdown.Item href="#/action-2" eventKey={'Cheapest first'} onSelect={this.handleSort1}>Cheapest first</Dropdown.Item>
    <Dropdown.Item href="#/action-3" eventKey={'Fastest first'} onSelect={this.handleSort1}>Fastest first</Dropdown.Item>
    <Dropdown.Item href="#/action-3" eventKey={'OutBound: Departure time'} onSelect={this.handleSort1}>OutBound: Departure time</Dropdown.Item>
    <Dropdown.Item href="#/action-3" eventKey={'Return:Departure time'} onSelect={this.handleSort1}>Return : Departure time</Dropdown.Item>
    </DropdownButton>
    </div>
    </div>
    <div style={{display:'flex',marginTop:'10px'}}>
    <Accordion>
    
  <Card border='light' style={{ width: '18rem',backgroundColor:'#F0FFF0' }}>
    
    
      <Accordion.Toggle  variant="link" as={Card.Header} eventKey="0" style={{height:'55px'}}>
        Stops
      </Accordion.Toggle>

    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <div className='mb-3'>
      <Form.Check type="checkbox" label="Direct"/><br/>
      <Form.Check type="checkbox" label="1-stop" /><br/>
      <Form.Check type="checkbox" label="2-stops" />
      </div>
      </Card.Body>
    </Accordion.Collapse>
    
    
      <Accordion.Toggle as={Card.Header} variant="outline-primary" eventKey="1" style={{height:'55px'}}>
      Departure times
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
    
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" style={{height:'55px'}}>
    Journey duration
    </Accordion.Toggle>
  
  <Accordion.Collapse eventKey="2">
    <Card.Body>Hello! I'm another body</Card.Body>
  </Accordion.Collapse>
 
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="3" style={{height:'55px'}}>
    Airlines
    </Accordion.Toggle>
  
  <Accordion.Collapse eventKey="3">
    <Card.Body>Hello! I'm another body</Card.Body>
  </Accordion.Collapse>
  
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="4" style={{height:'55px'}}>
    Greener flights
    </Accordion.Toggle>
  
  <Accordion.Collapse eventKey="4">
    <Card.Body>
    <Form.Check type="checkbox" label="Only show flights with lower CO₂ emissions" />
    </Card.Body>
  </Accordion.Collapse>
 
  </Card>
</Accordion>

<CardGroup>
<Card style={{borderWidth:'2px',borderRadius:'10px',borderColor:'#20B2AA',width:'60rem',height:'70px'}}>
<Card.Body style={{display:'flex'}}>
<img
src={require('../../Images/flight-icon4.png')}
alt='icon'
width='25px' height='25px'
/>
<p style={{fontSize:'18px',fontFamily:'sans-serif',marginLeft:'5px'}}>Look out for airlines with flexible tickets - this often means you can cancel or change your dates for free.</p></Card.Body>
</Card>
<CardDeck style={{display:'flex',marginTop:'10px',borderRadius:'7px'}}>
{['top'].map((placement) => (
    <>
      <OverlayTrigger
        key={placement}
        placement={placement}
        overlay={
          <Tooltip id={`tooltip-${placement}`}>
          We think these flights offer the best combination of<br/>
          of price and speed.We also consider factors like<br/> number of
          stops and hassle.And if your preferences allow.<br/>
          we'll personalize your search results
          </Tooltip>
        }
      >
      <Card style={{width:'25rem',height:'130px',borderRadius:'10px'}}>
<Card.Body>
<p>Best</p>
<p> GH 768</p>
<p>On 40 (average)</p>
</Card.Body>
</Card>
      </OverlayTrigger>{' '}
    </>
  ))}
  {['top'].map((placement) => (
    <>
      <OverlayTrigger
        key={placement}
        placement={placement}
        overlay={
          <Tooltip id={`tooltip-${placement}`}>
            Sort by Cheapest price
          </Tooltip>
        }
      >
      <Card style={{width:'25rem',height:'130px',borderRadius:'10px'}}>
      <Card.Body>
      <p>Cheapest</p>
      <p> GH 768</p>
      <p>On 40 (average)</p>
      </Card.Body>
      </Card>
      </OverlayTrigger>{' '}
    </>
  ))}
  {['top'].map((placement) => (
    <>
      <OverlayTrigger
        key={placement}
        placement={placement}
        overlay={
          <Tooltip id={`tooltip-${placement}`}>
           Sort by shortest duration
          </Tooltip>
        }
      >
      <Card style={{width:'25rem',height:'130px',borderRadius:'10px'}}>
<Card.Body>
<p>Fastest</p>
<p> GH 768</p>
<p>On 40 (average)</p>
</Card.Body>
</Card>
      </OverlayTrigger>{' '}
    </>
  ))}

</CardDeck>

<div style={{display:'flex',borderRadius:'7px', marginTop:'10px'}}>
<div>

  <Card style={{width:'49rem',height:'160px',borderRadius:'10px'}}>
  <Card.Body>
  <p>Best</p>
  <p> GH 768</p>
  <p>On 40 (average)</p>
  </Card.Body>
  </Card>
</div>
<div>
<Card style={{width:'25rem',height:'160px',borderRadius:'10px'}}>
<p style={{fontSize:'28px',marginLeft:'80px',fonWeight:'bolder',marginTop:'10px'}}> GH<img 
src={require('../../Images/cedi-icon.png')}
alt='cedi' width='20px' height='20px'
/>768</p>
<Card.Body>
<Button variant="outline-primary" style={{height:'40px',marginLeft:'80px'}}>
  <div style={{display:'flex'}}>
  <div style={{fontSize:'22px',color:'#4682B4',fontWeight:'bold'}}>Select</div>
  </div>
  </Button>
</Card.Body>
</Card>
</div>
</div>
<div style={{display:'flex',borderRadius:'7px', marginTop:'5px'}}>
  <Card style={{width:'74rem',height:'160px',borderRadius:'10px'}}>
  <Card.Body>
  <div style={{marginBottom:'15px'}}>
  <p style={{marginLeft:'480px',fontSize:'20px',fontWeight:'bolder'}}>Like these flights?</p>
  <p style={{marginLeft:'400px',fontSize:'15px'}}> We'll let you know when prices go up and down</p>
  </div>
  <Button variant="outline-primary" style={{height:'40px',marginLeft:'480px'}}>
  <div style={{display:'flex'}}>
  <div style={{fontSize:'18px',color:'#4682B4',fontWeight:'bold'}}>Track prices</div>
  </div>
  </Button>
  </Card.Body>
  </Card>
</div><br/>
<Button variant="outline-primary" style={{height:'40px',marginLeft:'480px'}}>
    <div style={{display:'flex'}}>
    <div style={{fontSize:'18px',color:'#4682B4',fontWeight:'bold'}}>Show More Results</div>
    </div>
    </Button>
</CardGroup>
    </div>
    </div>
  </Container>
        </div>
    )
}
}

export default SearchResults;
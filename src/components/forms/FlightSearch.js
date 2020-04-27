import React,{Component,useState} from 'react';

import {Nav,NavDropdown,Navbar,Button,Form,Col,InputGroup,Alert} from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

import { RangeDatePicker,SingleDatePicker } from 'react-google-flight-datepicker';

class FlightSearch extends Component{
    constructor(props) {
        super(props);
        
        
         
        const range=()=>{
            return(
                <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}/>
            )
        }
        const single=()=>{
            return(
                <SingleDatePicker startDate={new Date(2020, 0, 15)} />
            )
        }

        this.state = {
            current1:'Round-trip',
            current2:'Adult',
            current3:'Economy',
            tripType: 'round',
            origin: '',
            destination: '',
            timeRange: range(),
            singleRange:  single(),
            adults: 1,
            seniors:0,
            youth:0,
            child: 0,
            seatInfant: 0,
            lapInfant: 0,
            tripClass: 'economy',
            show1: true,
            show2: false
        };
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
    // handles navDropDown change
    handleChange1=(event)=>{
        this.setState({current1:event})
    }
    handleChange2=(event)=>{
        this.setState({current2:event})
    }
    handleChange3=(event)=>{
        this.setState({current3:event})
    }
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
    tripTypeChange = (event) => {
        // set default time range depending on trip type
        const value = event.target.value;
        
        if (value === 'round') {
            return this.state.timeRange
        }
        else if (value ==='oneway'){
            return this.state.singleRange
        } 

        // push changes to state
        this.setState({ 
            tripType: value,
            timeRange: this.state.timeRange
         });
    }
    
    // // select time range
    // rangeSet = (event, inst) => {
    //     if (this.state.tripType === 'round') {
    //         this.setState({
    //             timeRange: inst.getVal()
    //         });
    //     } else {
    //         this.setState({
    //             timeRange: [inst.getVal()[0], null]
    //         });
    //     }
    // }
    
    // rangeChange = (event, inst) => {
    //     const oneWay = this.state.tripType === 'oneway';
    //     if (oneWay && event.control === 'calendar' && event.active === 'start') {
    //         inst._isVisible = false;
    //         inst.setActiveDate('start');
    //         inst._isVisible = true;
    //     }
    // }
    
    rangeClose = () => {
        if (this.state.tripType === 'oneway') {
            return true;
        }
    }
    
    // passenger numbers
    adultsChange = (event) => {
        this.setState({
            adults: +event.target.value
        });
    }
    seniorsChange = (event) => {
        this.setState({
            seniors: +event.target.value
        });
    }
    youthChange = (event) => {
        this.setState({
            youth: +event.target.value
        });
    }
    childChange = (event) => {
        this.setState({
            child: +event.target.value
        });
    }
    
    seatChange = (event) => {
        this.setState({
            seatInfant: +event.target.value
        });
    }
    lapChange = (event) => {
        this.setState({
            lapInfant: +event.target.value
        });
    }
    
    // trip class selection
    tripClassChange = (event) => {
        this.setState({
            tripClass: event.target.value 
        });
    }
    
    remoteData = {
        url: 'https://trial.mobiscroll.com/airports/',
        remoteFilter: true,
        dataType: 'jsonp',
        processResponse: (data) => {
            let ret = [];

            if (data) {
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    ret.push({
                        value: item.code,
                        text: item.name,
                        html: '<div style="font-size:16px;line-height:18px;">' + item.name + '</div><div style="font-size:10px;line-height:12px;">' + item.location + ', ' + item.code + '</div>'
                    });
                }
            }
            return ret;
        }
    }
    
    render(){
        const Title1=this.state.current1;
        const Title2=this.state.current2;
        const Title3=this.state.current3;
        return(
            <div  style={{fontSize:'20px',fontFamily:'sans-serif'}}>
            <Nav>
            <NavDropdown 
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
            
            <div style={{display:'flex',marginTop:'5px'}}>
            <Navbar className="justify-content-between" expand="lg" bg="info" variant="dark"
    style={{
    width:'60rem',
    height:'75px',
    marginLeft:'12px',
    borderRadius:'5px'
    }}>
    
    <Alert show={this.state.show1} style={{marginTop:'15px'}}>
    <Form style={{marginTop:'15px'}} >
  <Form.Row>
    <Form.Group as={Col}>
    
        <InputGroup >
        <Form.Control
        style={{width:'20rem',height:'67px',marginRight:'12px',borderRadius:'7px'}}
        type="text"
        placeholder="From?"
        />
        <Button style={{width:'45px',height:'55px',marginLeft:'15px',marginTop:'7px'}}><img 
        src={require('../../Images/direction1.png')} 
        alt="direction"
        width="15px"
        height="15px"
        
        /></Button>
        <Form.Control
        style={{width:'20rem',height:'67px',marginRight:'40px',marginLeft:'20px',borderRadius:'7px'}}
        type="text"
        placeholder="To?"
        />
        <RangeDatePicker
        startDate={new Date(2020, 0, 15)}
        endDate={new Date(2020, 1, 1)}/>
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
      style={{width:'15rem',height:'67px',marginRight:'12px',borderRadius:'7px'}}
      type="text"
      placeholder="From?"
      />
      <Button style={{width:'45px',height:'55px',marginLeft:'5px',marginTop:'7px'}}><img 
      src={require('../../Images/direction1.png')} 
      alt="direction"
      width="15px"
      height="15px"
      
      /></Button>
      <Form.Control
      style={{width:'15rem',height:'67px',marginRight:'30px',marginLeft:'20px',borderRadius:'7px'}}
      type="text"
      placeholder="To?"
      />
      <SingleDatePicker startDate={new Date(2020, 0, 15)} />
      
      </InputGroup>
  </Form.Group>
</Form.Row>
</Form>
</Alert>
  </Navbar>
  <div >
  
  <Button variant="outline-light" style={{marginLeft:'50px',marginTop:'7px',width:'10rem',height:'4rem',borderRadius:'350px'}} >Search</Button>{' '}
  </div>
  </div>
            </div>
        )
    }
}

export default FlightSearch;
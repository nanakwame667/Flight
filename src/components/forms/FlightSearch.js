import React, * as react from 'react';

import {
  Button,
  Card, CardDeck, CardGroup, Row, Col, Container,
  Dropdown, DropdownButton, Form,
  InputGroup, Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip
} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import { RangeDatePicker, SingleDatePicker } from 'react-google-flight-datepicker';

import AppContext from '../../config/app-context';
import Footer from './../../screens/components/footer';

import FlightItem from './flight-item';

import NavBar from './home/NavBar';

const axiosRestClient = require('axios-rest-client').default;
const { BASE_API_URL } = require('../../utils/constants');


class FlightSearch extends react.Component {

  state = { data: [] }
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {
      person: 'adult',
      flightClass: 'economy',
      sortBy: 'best',
      tripType: 'one-way',
    }
  }

  
  displayFlights = async () => {

    let token = this.context.token;
    let key = this.props.search;
    let whereClause = {};

    if (key){
        whereClause = {
            $or : [
                {
                    departureCity: {
                        $like : '%'+key+'%'
                    }
                },
                {   destinationCity: {
                        $like : '%'+key+'%'
                    }
                },
                {   flightType: {
                        $like : '%'+key+'%'
                    }
                },
                {   price: {
                        $like : '%'+key+'%'
                    }
                } 
            ]
        }
    }

    console.log(key, whereClause)

    const api = axiosRestClient({
      baseUrl: BASE_API_URL + 'flight/',
      headers: {
        auth_token: token
      }
    });

    api.query.create({
      where: whereClause
    }).then(({ data }) => {
      this.setState({ data: data.result.data });
    }).catch(err => {
      console.log(err);
    });


  }


  render() {
    return (
      <div>
        <NavBar />
        <br /><br />

        <Container style={{ backgroundColor: '#20B2AA', color: '#fff', 'max-width': '100%' }}>
          <Row>
            <Col style={{ padding: '20px' }}>
              <Nav className="d-flex flex-row justify-content-center">
              <NavDropdown className="d-inline-flex"  style={{ fontSize: '130%' }} title={this.state.tripType} id="collasible-nav-dropdown">
                <NavDropdown.Item value="round-trip" eventKey={'round-trip'} onSelect={(event) => this.setState({ tripType: event })}>Round Trip</NavDropdown.Item>
                <NavDropdown.Item value="one-way" eventKey={'one-way'} onSelect={(event) => this.setState({ tripType: event })}>One Way</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown  className="d-inline-flex" value={this.state.adults} min={1} max={15} data-val="left" id="collasible-nav-dropdown" title={this.state.person}>
                <NavDropdown.Item eventKey={'adult'} onSelect={(event) => this.setState({ person: event })}>Adult</NavDropdown.Item>
                <NavDropdown.Item eventKey={'seniors'} onSelect={(event) => this.setState({ person: event })}>Seniors</NavDropdown.Item>
                <NavDropdown.Item eventKey={'youth'} onSelect={(event) => this.setState({ person: event })}>Youth</NavDropdown.Item>
                <NavDropdown.Item eventKey={'child'} onSelect={(event) => this.setState({ person: event })}>Child</NavDropdown.Item>
                <NavDropdown.Item eventKey={'seat-infant'} onSelect={(event) => this.setState({ person: event })}>Seat Infant</NavDropdown.Item>
                <NavDropdown.Item eventKey={'lap-infant'} onSelect={(event) => this.setState({ person: event })}>Lap Infant</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown  className="d-inline-flex" id="collasible-nav-dropdown" title={this.state.flightClass}>
                <NavDropdown.Item eventKey={'economy'} onSelect={(event) => this.setState({ flightClass: event })}>Economy</NavDropdown.Item>
                <NavDropdown.Item eventKey={'premium-economy'} onSelect={(event) => this.setState({ flightClass: event })}>Premium Economy</NavDropdown.Item>
                <NavDropdown.Item eventKey={'business'} onSelect={(event) => this.setState({ flightClass: event })}>Business</NavDropdown.Item>
                <NavDropdown.Item eventKey={'first-class'} onSelect={(event) => this.setState({ flightClass: event })}>First Class</NavDropdown.Item>
                <NavDropdown.Item eventKey={'coach'} onSelect={(event) => this.setState({ flightClass: event })}>Coach</NavDropdown.Item>
              </NavDropdown>
              </Nav>
            </Col>
          </Row>
          <Row>
			    <Col>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <Navbar className="d-inline-flex" expand="xl"
                style={{
                  borderRadius: '5px'
                }}>

                {this.state.tripType === 'round-trip' ?
                  <Form className="d-inline-flex">
                    <Form.Row>
                      <Form.Group as={Col}>

                        <InputGroup>
                          <Form.Control
                            style={{ width: '221px', height: '67px', marginRight: '5px', borderRadius: '7px' }}
                            type="text"
                            placeholder="From?"
                          />
                          <Button style={{ width: '45px', height: '55px', marginLeft: '5px', marginTop: '7px' }} variant='outline-primary'><img
                            src={require('../../Images/direction1.png')}
                            alt="direction"
                            width="15px"
                            height="15px"
                          /></Button>
                          <Form.Control
                            style={{ width: '221px', height: '67px', marginRight: '10px', marginLeft: '20px', borderRadius: '7px' }}
                            type="text"
                            placeholder="To?"
                          />
                          <div style={{ width: '35rem' }}>
                            <RangeDatePicker
                              style={{ width: '15rem' }}
                              startDate={new Date()} />
                          </div>
                        </InputGroup>

                      </Form.Group>
                    </Form.Row>
                  </Form>
                  :
                  <Form  className="d-inline-flex">
                    <Form.Row>
                      <Form.Group as={Col}>
                        <InputGroup>
                          <Form.Control
                            style={{ width: '221px', height: '67px', marginRight: '12px', borderRadius: '7px' }}
                            type="text"
                            placeholder="From?"
                          />
                          <Button style={{ width: '45px', height: '55px', marginLeft: '5px', marginTop: '7px' }} variant='outline-primary'><img
                            src={require('../../Images/direction1.png')}
                            alt="direction"
                            width="15px"
                            height="15px"

                          /></Button>
                          <Form.Control
                            style={{ width: '221px', height: '67px', marginRight: '5px', marginLeft: '20px', borderRadius: '7px' }}
                            type="text"
                            placeholder="To?"
                          />
                          <div style={{ width: '29rem', height: '2rem', marginLeft: '5px' }}>
                            <SingleDatePicker startDate={new Date()} />
                          </div>
                        </InputGroup>
                      </Form.Group>
                    </Form.Row>
                  </Form>
                }
              </Navbar>
              <Button className="d-inline-flex" variant="primary" 
                  style={{
                    paddingLeft: '32px', paddingRight: '32px',
                    paddingTop: '16px', paddingBottom: '16px',
                    hieght: '60px',
                    borderRadius: '350px', textAlign: 'center'
                  }}>
                  Search
                  </Button>
            </div>
           </Col>
          </Row>
        </Container>
        
        <Container style={{ backgroundColor: '#F0FFF0' }} fluid>
          <Row className="p-4">
            <Col md={4}>
              <Button variant="outline-primary" style={{ height: '40px' }}>
                <div style={{ display: 'flex' }}>
                  <img src={require('../../Images/bell-icon.png')}
                    width='20px' height='20px'
                    alt='bell' />
                  <div style={{ fontSize: '18px', color: '#4682B4', fontWeight: 'bold' }}>Get Price Alerts</div>
                </div>
              </Button>
            </Col>
            <Col md={8}>
             <div className="d-flex flex-row justify-content-end align-items-center">
                  <p className="d-inline-flex mr-2">Sort By</p>
                  <DropdownButton className="d-inline-flex" size='md' title={this.state.sortBy} variant='outline-primary'>
                    <Dropdown.Item eventKey={'price'} onSelect={(event) => this.setState({ sortBy: event })}>Price</Dropdown.Item>
                    <Dropdown.Item eventKey={'departure-time'} onSelect={(event) => this.setState({ sortBy: event })}>Departure Time</Dropdown.Item>
                    <Dropdown.Item eventKey={'arrival-time'} onSelect={(event) => this.setState({ sortBy: event })}>Arrival Time</Dropdown.Item>
                    <Dropdown.Item eventKey={'departure-city'} onSelect={(event) => this.setState({ sortBy: event })}>Departure City</Dropdown.Item>
                    <Dropdown.Item eventKey={'destination-city'} onSelect={(event) => this.setState({ sortBy: event })}>Arrival City</Dropdown.Item>
                  </DropdownButton>
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col xs={12} sm={12} md={4} lg={3}>

              <Accordion>

                <Card border='light' style={{ backgroundColor: '#F0FFF0' }}>

                  <Accordion.Toggle variant="link" as={Card.Header} eventKey="0" style={{ height: '55px' }}>
                    Stops
                </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className='mb-3'>
                        <Form.Check type="checkbox" label="Direct" /><br />
                        <Form.Check type="checkbox" label="1-stop" /><br />
                        <Form.Check type="checkbox" label="2-stops" />
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>


                  <Accordion.Toggle as={Card.Header} variant="outline-primary" eventKey="1" style={{ height: '55px' }}>
                    Departure times
                </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" style={{ height: '55px' }}>
                    Journey duration
                </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle as={Card.Header} variant="link" eventKey="3" style={{ height: '55px' }}>
                    Airlines
                </Accordion.Toggle>

                  <Accordion.Collapse eventKey="3">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>

                  <Accordion.Toggle as={Card.Header} variant="link" eventKey="4" style={{ height: '55px' }}>
                    Greener flights
                </Accordion.Toggle>

                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <Form.Check type="checkbox" label="Only show flights with lower CO₂ emissions" />
                    </Card.Body>
                  </Accordion.Collapse>

                </Card>
              </Accordion>

            </Col>

            <Col xs={12} sm={12} md={8} lg={9}>

              <div>
                <Card style={{ borderWidth: '2px', borderRadius: '10px', borderColor: '#20B2AA' }}>
                  <Card.Body>
                    <FlightItem item={{departureDate: new Date(), arrivalDate: new Date()}}/>
                  </Card.Body>
                </Card>
              </div>

              <CardGroup>
                <Card style={{ borderWidth: '2px', borderRadius: '10px', borderColor: '#20B2AA' }}>
                  <Card.Body style={{ display: 'flex' }}>
                    <img
                      src={require('../../Images/flight-icon4.png')}
                      alt='icon'
                      width='25px' height='25px'
                    />
                    <p style={{ fontSize: '18px', fontFamily: 'sans-serif', marginLeft: '5px' }}>Look out for airlines with flexible tickets - this often means you can cancel or change your dates for free.</p>
                  </Card.Body>
                </Card>

                <CardDeck style={{ display: 'flex', marginTop: '10px', borderRadius: '7px' }}>
                  {['top'].map((placement) => (
                    <>
                      <OverlayTrigger
                        key={placement}
                        placement={placement}
                        overlay={
                          <Tooltip id={`tooltip-${placement}`}>
                            We think these flights offer the best combination of<br />
                            of price and speed.We also consider factors like<br /> number of
                            stops and hassle.And if your preferences allow.<br />
                            we'll personalize your search results
                          </Tooltip>
                        }
                      >
                        <Card 
                        style={{ width: '25rem',
                            height: '130px',
                            borderRadius: '10px',
                            backgroundColor:'#87CEFA',
                            
                          }}>
                          <Card.Body>
                          
                            <p  style={{fontSize:'18px',color:'#2F4F4F'}}>Best<br/>
                              GH 768<br/>
                            On 40 (average)</p>
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
                        <Card style={{ width: '25rem', height: '130px', borderRadius: '10px',backgroundColor:'#F0E68C' }} variant="outline-primary">
                          <Card.Body>
                            <p style={{fontSize:'18px',color:'#2F4F4F'}}>Cheapest<br/>
                              GH 768<br/>
                            On 40 (average)</p>
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
                        <Card style={{ width: '25rem', height: '130px', borderRadius: '10px' ,backgroundColor:'#7FFFD4'}} variant="outline-info">
                          <Card.Body>
                            <p style={{fontSize:'18px',color:'#2F4F4F'}}>Fastest<br/>
                              GH 768<br/>
                            On 40 (average)</p>
                          </Card.Body>
                        </Card>
                      </OverlayTrigger>{' '}
                    </>
                  ))}

                </CardDeck>

                <div style={{ display: 'flex', borderRadius: '7px', marginTop: '10px' }}>
                  <div>
                    <Card style={{ width: '49rem', height: '160px', borderRadius: '10px',borderColor:'#87CEFA' }}>
                      <Card.Body>
                        <p>Best</p>
                        <p> GH 768</p>
                        <p>On 40 (average)</p>
                      </Card.Body>
                    </Card>
                  </div>
                  <div>
                    <Card style={{ width: '25rem', height: '160px', borderRadius: '10px',borderColor:'#87CEFA' }}>
                      <p style={{ fontSize: '28px', marginLeft: '80px', fonWeight: 'bolder', marginTop: '10px' }}> GH<img
                        src={require('../../Images/cedi-icon.png')}
                        alt='cedi' width='20px' height='20px'
                      />768</p>
                      <Card.Body>
                        <Button variant="outline-primary" style={{ height: '40px', marginLeft: '80px' }}>
                          <div style={{ display: 'flex' }}>
                            <div style={{ fontSize: '22px', color: '#4682B4', fontWeight: 'bold' }}>Select</div>
                          </div>
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div style={{ display: 'flex', borderRadius: '7px', marginTop: '5px' }}>
                  <Card style={{ width: '74rem', height: '160px', borderRadius: '10px' }}>
                    <Card.Body>
                      <div style={{ marginBottom: '15px' }}>
                        <p style={{ marginLeft: '480px', fontSize: '20px', fontWeight: 'bolder' }}>Like these flights?</p>
                        <p style={{ marginLeft: '400px', fontSize: '15px' }}> We'll let you know when prices go up and down</p>
                      </div>
                      <Button variant="outline-primary" style={{ height: '40px', marginLeft: '480px' }}>
                        <div style={{ display: 'flex' }}>
                          <div style={{ fontSize: '18px', color: '#4682B4', fontWeight: 'bold' }}>Track prices</div>
                        </div>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <br />
                <Button variant="outline-primary" style={{ height: '40px', marginLeft: '480px' }}>
                  <div style={{ display: 'flex' }}>
                    <div style={{ fontSize: '18px', color: '#4682B4', fontWeight: 'bold' }}>Show More Results</div>
                  </div>
                </Button>
              </CardGroup>

            </Col>
          </Row>

        </Container>
        <Footer/>
      </div>
      
    )
  }
}

export default FlightSearch;
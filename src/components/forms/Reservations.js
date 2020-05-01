
import React, { Component } from 'react';
import { Table, Container, Card, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Counter from './counter';
import NavBar from './home/NavBar';
import FlightClass from './flight-class-picker';
import AppContext from '../../config/app-context';
import { Redirect } from 'react-router-dom';
import Footer from './../../components/forms/home/footer';

const axiosRestClient = require('axios-rest-client').default;
const { BASE_API_URL } = require('../../utils/constants');
const { formatDate } = require('../../utils/functions');
const { SearchBar } = Search;

export default class Reservations extends Component {

    static contextType = AppContext;
    
    state = { reservations: [] };

    columns = [
        {
            dataField: 'flightType',
            text: 'Flight Type'
        }, {
            dataField: 'flightClass',
            text: 'Flight Class'
        }, {
            dataField: 'depCity',
            text: 'Departure City'
        }, {
            dataField: 'destination',
            text: 'Destination'
        }, {
            dataField: 'depDate',
            text: 'Departure Date'
        }, {
            dataField: 'arryDate',
            text: 'Arrival Date'
        }, {
            dataField: 'passengers',
            text: 'Passengers'
        }, {
            dataField: 'pay',
            text: ''
        }, {
            dataField: 'remove',
            text: ''
        },
    ];

    constructor(props, context){
        super(props, context);
        this.listReservations();
    }
  
    listReservations = () => {
        
        const api = axiosRestClient({
            baseUrl: BASE_API_URL,
            headers: {
                auth_token: this.context.token
            }
        });

        function removeReservation(id) {
            if (window.confirm("Are you sure u want to remove this reservation?")) {
                api.reservation.delete(id).then(({ data }) => {
                    console.log(data);
                    if (data.status === 'success') {
                        alert('you successfully remove the reservation.');
                        this.listReservations();
                    }
                    else {
                        alert('attempt to remove reservation failed!.');
                    }
                }).catch(err => {
                    console.log(err);
                    alert('error while attempting to remove reservation failed!.');
                })
            }
        }
        
        api.reservation.all().then(({ data }) => {
            if (data.status === 'success') {
                let reservations = [];
                data.result.data.map(async (item, i) => {
                    const api = axiosRestClient({
                        baseUrl: BASE_API_URL + 'flight/'
                    });
                    try{
                        let flight = await api.query.create({ where: {id :item.flightID}});
                        flight = flight.data.result.data;
                        if (flight.length > 0){
                            flight = flight[0];
                            reservations.push({
                                id: item.id,
                                flightType: flight.flightType,
                                flightClass: <FlightClass value={item.travelClass} />,
                                depCity: flight.departureCity,
                                destination: flight.destinationCity,
                                depDate: formatDate('dd/mm/yy HH:MM', flight.departureDate),
                                arryDate: formatDate('dd/mm/yy HH:MM', flight.arrivalDate),
                                passengers: <Counter value={item.numberOfPersons} />,
                                pay: <Button variant="outline-primary">Pay</Button>,
                                remove: <Button variant="outline-danger" onClick={() => { removeReservation(item.id); }}>Remove</Button>
                            });
                        }
                    }catch(err){
                        console.log(err)
                    };
                    if (i+1 === data.result.data.length){
                        this.setState({reservations: reservations});
                    }
                });
            }
        }).catch(err => {
            console.log(err);
        });

    }


    // Implement startWith instead of contain
    customMatchFunc({ searchText, value, column, row }) {
        if (typeof value !== 'undefined') {
            return value.toLowerCase().startWith(searchText.trim().toLowerCase());
        }
        return false;
    }


    render() {
        return (!(this.context.user && this.context.token) ? <Redirect to='/' /> :
          
            <Container style={{ 'max-width': '100%' }} >
                <NavBar /><br /><br />
                <Container style={{ backgroundColor: '#F0FFF0', marginTop: '12px' }} fluid>
                    <Card>
                        <Card.Header
                            style={{ display: 'flex', backgroundColor: '#FFFAFA', borderWidth: '2', borderRadius: '10px', borderColor: '#7FFFD4' }}>
                            <img
                                src={require('../../Images/reservation-icon.png')} alt='reservation'
                                width='30px' height='30px' marginTop="10px"
                            />
                            <p style={{ fontFamily: 'sans-serif', fontSize: '20px', fontWeight: 'lighter' }}>My Reservation</p>

                        </Card.Header>
                        <Card.Body>
                            <ToolkitProvider
                                keyField="id"
                                data={this.state.reservations}
                                columns={this.columns}
                                search={this.customMatchFunc}
                            >
                                {
                                    props => (
                                        <div>
                                            <SearchBar {...props.searchProps}
                                                placeholder='Search for reservations...'
                                                style={{ width: '350px', borderWidth: '2', borderColor: '#00CED1', borderRadius: '10px' }}
                                            />
                                            <BootstrapTable
                                                striped
                                                hover
                                                bordered={false}
                                                {...props.baseProps}

                                            />
                                        </div>
                                    )
                                }
                            </ToolkitProvider>
                        </Card.Body> 
                    </Card>
                </Container>
               
            </Container> 
        )
    }
}

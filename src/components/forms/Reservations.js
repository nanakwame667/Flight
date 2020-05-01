import React, { Component } from 'react';
import { Table, Container, Card, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Counter from './counter';
import NavBar from './home/NavBar';
import FlightClass from './flight-class-picker';
import AppContext from '../../config/app-context';
import { Redirect } from 'react-router-dom';
const axiosRestClient = require('axios-rest-client').default;
const { BASE_API_URL } = require('../../utils/constants');
const { SearchBar } = Search;

export default class Reservations extends Component {

    static contextType = AppContext;
    state = { data: [] };

    columns = [{
        dataField: 'id',
        text: 'Flight ID'
        }, {
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

    constructor(props, context) {
        super(props, context);
        if (this.context.token && this.context.user) {
            // this.listReservations();
        }
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
            console.log(data)
            if (data.status === 'success') {
                let reservations = data.result.data.map((item) => {
                    return {
                        id: item.id,
                        flightType: item.flightType,
                        flightClass: <FlightClass value={item.travelClass} />,
                        depCity: item.departureCity,
                        destination: item.destinationCity,
                        depDate: item.departureDate,
                        arryDate: item.arrivalDate,
                        passengers: <Counter value={item.numberOfPersons} />,
                        pay: <Button variant="outline-primary">Pay</Button>,
                        remove: <Button variant="outline-danger" onClick={() => { removeReservation(item.id); }}>Remove</Button>
                    }
                });
                console.log(reservations);
                this.setState({ data: reservations });
            }
        }).catch(err => {
            console.log(err);
        });

    }


    // Implement startWith instead of contain
    customMatchFunc({ searchText, value, column, row }) {
        if (typeof value !== 'undefined') {
            console.log(value);
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
                                data={this.state.data}
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

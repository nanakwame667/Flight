import React from 'react';

import {Table,Container,Card,Button} from 'react-bootstrap';

import BootstrapTable from 'react-bootstrap-table-next';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import Counter from './counter';

import NavBar from './home/NavBar';
import FlightClass from './home/flightClass';

export default function Reservations (){
    const {SearchBar}=Search;
    // Implement startWith instead of contain
function customMatchFunc({
    searchText,
    value,
    column,
    row
    }) {
    if (typeof value !== 'undefined') {
        return value.startsWith(searchText);
    }
    return false;
    }
    const products=[{
        id:0,
        flightType:'Round-trip',
        flightClass:<FlightClass/>,
        depCity:'Accra',
        destination:'Kumasi',
        depDate:'26/05/20',
        arryDate:'27/05/20',
        passengers:<Counter/>,
        pay:<Button variant="outline-primary">Pay</Button>,
        remove:<Button variant="outline-danger">Remove</Button>
    },{
        id:1,
        flightType:'One-way',
        flightClass:<FlightClass/>,
        depCity:'Takoradi',
        destination:'Kumasi',
        depDate:'26/05/20',
        arryDate:'27/05/20',
        passengers:<Counter/>,
        pay:<Button variant="outline-primary">Pay</Button>,
        remove:<Button variant="outline-danger">Remove</Button>
    },{
        id:2,
        flightType:'Round-trip',
        flightClass:<FlightClass/>,
        depCity:'Akuapem',
        destination:'Sekondi',
        depDate:'26/05/20',
        arryDate:'27/05/20',
        passengers:<Counter/>,
        pay:<Button variant="outline-primary">Pay</Button>,
        remove:<Button variant="outline-danger">Remove</Button>
    }

]
    const columns = [{
        dataField: 'id',
        text: 'Flight ID'
        }, {
        dataField: 'flightType',
        text: 'Flight Type'
        },{
            dataField:'flightClass',
            text:'Flight Class'
        },{
        dataField: 'depCity',
        text: 'Departure City'
        }, {
        dataField: 'destination',
        text: 'Destination'
        }, {
        dataField: 'depDate',
        text: 'Departure Date'
        },{
        dataField: 'arryDate',
        text: 'Arrival Date'
        },{
        dataField: 'passengers',
        text: 'Passengers'
        },{
        dataField: 'pay',
        text: ''
        },{
        dataField: 'remove',
        text: ''
        },
    ];
    return(
        <Container
        style={{'max-width': '100%'}}
        >
        <NavBar/><br/><br/>
        <Container style={{backgroundColor:'#F0FFF0',marginTop:'12px'}}fluid>
        <Card>
        <Card.Header
        style={{display:'flex',backgroundColor:'#FFFAFA',borderWidth:'2',borderRadius:'10px',borderColor:'#7FFFD4'}}>
        <img
        src={require('../../Images/reservation-icon.png')} alt='reservation'
        width='30px' height='30px' marginTop="10px"
        />
        <p style={{fontFamily:'sans-serif',fontSize:'20px',fontWeight:'lighter'}}>My Reservation</p>
        
        </Card.Header>
        <Card.Body>
        <ToolkitProvider
            keyField="id"
            data={ products }
            columns={ columns }
            search={{customMatchFunc}}
>
{
    props=>(
        <div>
<SearchBar { ...props.searchProps }
placeholder='Search for reservations...'
style={{width:'350px',borderWidth:'2',borderColor:'#00CED1',borderRadius:'10px'}}
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

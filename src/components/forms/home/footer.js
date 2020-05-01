import React from 'react';

import '../../../css/styles.css';


function HomeFooter() {
    return (

        <footer className="bg-primary" style={{ color: '#d5d5d5', 'padding-top': '2rem'}}>
            <div className="container-fluid padding">
                <div className="row padding text-center">
                    <div className="col-md-4">
                        <h1 className="mt-4" style={{'text-transform': 'uppercase',
                                                    'text-shadow': '2px 1px 5px #292929',
                                                    'font-weight': 'bold',
                                                    'font-family': '"Monotype Corsiva", monospace',
                                                    'font-size': '50px',
                                                    'color': '#e3e3e3', 
                                                    'margin-left': '16px'}}>Flight Booky</h1>
                        <hr className="light" />
                        <p>055-356-7950</p>
                        <p>info@team-gladys.com</p>
                        <p>Valley View</p>
                        <p>Accra Ghana</p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" />
                        <h3 className="lead">Working Hours</h3>
                        <hr className="light" />
                        <p>Saturday-Friday</p>
                        <p>8am. to 6pm. Accra</p>
                        <p>Weekends- 12pm to 6pm</p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" />
                        <h3 className="lead">Arlines</h3>
                        <hr className="light" />
                        <p>Sentinal Airways</p>
                        <p>BroadyWay Flights</p>
                        <p>Sunny Walks</p>
                        <p>Kotoka International</p>
                    </div>
                </div>
                <div className="row padding text-center">
                    <hr className="light" />
                    <div className="col-12"> <p><strong>Team Gladys Works @ {new Date().getFullYear()}</strong></p></div>
                </div>
            </div>
        </footer>

    )
}

export default HomeFooter;
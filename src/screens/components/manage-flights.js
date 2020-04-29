import React, { Component } from 'react';
import AdminAddFlight from './admin-add-flight';
import AdminViewFlights from './admin-view-flights';

class ManageFlight extends Component {

    state = {
        showViewFor: 'flights'
    }

    render(){

        console.log(this.state)

        return (

            <div>

                <ol className="breadcrumb">
                    <li className="breadcrumb-item" onClick={() => this.setState({showViewFor: 'flights'})}><a href="#">Flights</a></li>
                    <li className="breadcrumb-item active"  onClick={() => this.setState({showViewFor: 'add-flight'})}>
                        <a href="#">New</a>
                    </li>
                    <li className="breadcrumb-menu d-md-down-none">
                        <div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <span className="input-group-prepend">
                                        <button className="btn btn-primary" type="button" onClick={()=>{
                                                this.setState({showViewFor: 'flights', search: this.search_flight.value.trim()});
                                            }}>
                                            <i className="fa fa-search"></i> Search</button>
                                        </span>
                                        <input className="form-control" ref={view => this.search_flight = view}  id="input1-group2" type="text" name="input1-group2" placeholder="id, type, ... destination, departure"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
                </ol>

                <div className="container-fluid">
                            
                    <div className="container">

                        <div className="row">
                            <div className="col-12">
                                {this.state.showViewFor === 'add-flight' && <AdminAddFlight/>}
                                {this.state.showViewFor === 'flights' && <AdminViewFlights search={this.state.search}/>}
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        ) 
    }

}

export default ManageFlight;
import React, { Component } from 'react';
import ReservationItem from './order-item';

class ManageReservations extends Component {

    state= {
        customer: '',
        searchCustomerBy: ''
    }

    constructor(props){
        super(props);
        this.onSearchCustomerTextChange = this.onSearchCustomerTextChange.bind(this);
        this.setCustomerValue = this.setCustomerValue.bind(this);
    }

    addNewReservationField(){
        if (typeof this.state.order === "undefined"){
            this.setState({
                orders: [{}]
            });
        }
    }

    onSearchCustomerTextChange(event){
            this.searchResult = this.searchForCustomerByNameOrID(event.target.value);
            this.setState({searchCustomerBy: event.target.value, customer: ''});
    }

    setCustomerValue(data){
            this.setState({
                searchCustomerBy: '',
                customer: data
            });
    }

    searchForCustomerByNameOrID(searhValue){
        return [
            'Customer 1',
            'Customer 2',
            'Customer 3',
            'Customer 4',
            'Customer 5',
            'Customer 6'
        ];
    }

    render(){
        return (

            <div>

                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Reservations</a></li>
                    <li className="breadcrumb-item active">
                        <a href="#">New</a>
                    </li>
                    <li className="breadcrumb-menu d-md-down-none">
                        <div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <span className="input-group-prepend">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fa fa-search"></i> Search</button>
                                        </span>
                                        <input className="form-control" id="input1-group2" type="text" name="input1-group2" placeholder="customer-id"/>
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
                            
                                <div className="card">
                                    <div className="card-header">
                                        <strong>Add New Reservation</strong> Form</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-primary" type="button">Customer</button>
                                                                <span className="btn btn-primary" type="button" data-toggle="dropdown">
                                                                </span>
                                                                </div>
                                                                <input className="form-control" type="text" 
                                                                        onChange={ event => this.onSearchCustomerTextChange(event)}
                                                                        value={(this.state.searchCustomerBy === '') ? this.state.customer: this.state.searchCustomerBy}
                                                                        placeholder="search customer by name or id"/>
                                                                <div className="input-group-append">
                                                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                                                                    <span className="carets"></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"select-options p-3"+((this.state.searchCustomerBy === '') ? 'invisible':'')}>
                                                    <ul className="option-items">
                                                        {this.state.searchCustomerBy !== '' && <li><option className="option-item" value="">Matched Results</option></li>}
                                                        {this.state.searchCustomerBy !== '' && <div className="dropdown-divider" role="separator"></div> }
                                                        {
                                                           this.state.searchCustomerBy !== '' && this.searchResult.map(data => {
                                                                return  <li><option className="dropdown-item option-item" 
                                                                                    onClick={()=> this.setCustomerValue(data)}>{data}
                                                                            </option>
                                                                        </li>
                                                                            
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            { this.state.orders && <div className="container">
                                                    <div className="row">  
                                                        <div classNAme="col-12">
                                                            { this.state.orders.map(item => {
                                                                return <ReservationItem item={item}/>
                                                            })}
                                                        </div>
                                                    </div> 
                                                </div>
                                            }
                                                
                                            { this.state.customer !== '' && <div className="row">
                                                <div className="col-md-12 pt-3">
                                                    <button className="btn btn-primary" type="button" onClick={() => this.addNewReservationField()}>
                                                        <i className="fa fa-add"></i> Add Reservation
                                                    </button>
                                                    </div>
                                                </div>
                                            }
                                       </div>
                                    </div>
                                    <div className="card-footer">
                                        { this.state.orders && <button className="btn btn-sm btn-primary" type="submit">
                                        <i className="fa fa-check"></i> Submit Reservation</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        ) 
    }

}

export default ManageReservations;
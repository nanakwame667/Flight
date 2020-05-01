import React, { Component } from 'react';
import CustomerItem from './reservation-item';
import AdminViewReservations from './admin-view-customers';

class ManageReservations extends Component {

    state= {
        reservation: '',
        searchReservationBy: '',
        showViewFor: 'add-reservation'
    }

    constructor(props){
        super(props);
        this.onSearchReservationTextChange = this.onSearchReservationTextChange.bind(this);
        this.setReservationValue = this.setReservationValue.bind(this);
    }

    addNewReservationField(){
        if (typeof this.state.order === "undefined"){
            this.setState({
                orders: [{}]
            });
        }
    }

    onSearchReservationTextChange(event){
            this.searchResult = this.searchForReservationByNameOrID(event.target.value);
            this.setState({searchReservationBy: event.target.value, reservation: ''});
    }

    setReservationValue(data){
            this.setState({
                searchReservationBy: '',
                reservation: data
            });
    }

    searchForReservationByNameOrID(searhValue){
        return [
            
        ];
    }

    render(){
        return (

            <div>

                <ol className="breadcrumb">
                    <li className="breadcrumb-item"  onClick={() => this.setState({showViewFor: 'reservations'})}><a href="#">Search Customer</a></li>
                    <li className="breadcrumb-item active"  onClick={() => this.setState({showViewFor: 'add-reservation'})}>
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
                                        <input className="form-control" id="input1-group2" type="text" name="input1-group2" placeholder="reservation-id"/>
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
                                { (this.state.showViewFor === 'reservations') ? <AdminViewReservations/> :
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
                                                                <button className="btn btn-primary" type="button">Reservation</button>
                                                                <span className="btn btn-primary" type="button" data-toggle="dropdown">
                                                                </span>
                                                                </div>
                                                                <input className="form-control" type="text" 
                                                                        onChange={ event => this.onSearchReservationTextChange(event)}
                                                                        value={(this.state.searchReservationBy === '') ? this.state.reservation: this.state.searchReservationBy}
                                                                        placeholder="search reservation by name or id"/>
                                                                <div className="input-group-append">
                                                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                                                                    <span className="carets"></span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"select-options p-3"+((this.state.searchReservationBy === '') ? 'invisible':'')}>
                                                    <ul className="option-items">
                                                        {this.state.searchReservationBy !== '' && <li><option className="option-item" value="">Matched Results</option></li>}
                                                        {this.state.searchReservationBy !== '' && <div className="dropdown-divider" role="separator"></div> }
                                                        {
                                                           this.state.searchReservationBy !== '' && this.searchResult.map(data => {
                                                                return  <li><option className="dropdown-item option-item" 
                                                                                    onClick={()=> this.setReservationValue(data)}>{data}
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
                                                                return <CustomerItem item={item}/>
                                                            })}
                                                        </div>
                                                    </div> 
                                                </div>
                                            }
                                                
                                            { this.state.reservation !== '' && <div className="row">
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
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        ) 
    }

}

export default ManageReservations;
import React, { Component } from 'react';
import AppContext from '../../config/app-context';
import { formatDate } from '../../utils/functions';

const { BASE_API_URL } = require('../../utils/constants');
const axiosRestClient = require('axios-rest-client').default;
class FlightsListItem extends Component {

    state = {};
    static contextType = AppContext;

    render(){
        return (this.state.deleted ? <div/> :
          <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Flight {this.props.item.id}</h5>
                    <small>3 days ago</small>
                </div>
                <div className="row">

                    <div className="col-4">
                                      
                        <div className="card">
                            
                            <div className="card-body">
                                <form action="" method="post">
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Departure City</span>
                                        </div>
                                        <span className="form-control">{this.props.item.departureCity}</span> 
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                            
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Dep. Date</span>
                                        </div>
                                        <span className="form-control">{formatDate("dd/mm/yy HH:MM" ,this.props.item.departureDate)}</span> 
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                       
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Flight Type</span>
                                        </div>
                                        <span className="form-control">{this.props.item.flightType}</span> 
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                           
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            
                    </div>
                
                    <div className="col-4">
                                      
                                <div className="card">
                                
                                <div className="card-body">
                                <form action="" method="post">
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Arival City</span>
                                        </div>
                                        <span className="form-control">{this.props.item.destinationCity}</span> 
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                           
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Arr. Date</span>
                                        </div>
                                        <span className="form-control">{formatDate("dd/mm/yy HH:MM" ,this.props.item.arrivalDate)}</span> 
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fa fa-time"></i>
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Flight Price</span>
                                        </div>
                                        <span className="form-control">{this.props.item.price}</span> 
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fa fa-money"></i>
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            
                    </div>
                
                    <div className="col-4">
                                      
                                <div className="card">
                                
                                <div className="card-body">
                                <form action="" method="post">
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Num of Passengers</span>
                                        </div>
                                        <span className="form-control">{this.props.item.totalNumberOfPersons}</span> 
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fa fa-user"></i>
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Plane ID</span>
                                        </div>
                                        <span className="form-control">{this.props.item.planeIDs}</span> 
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fa fa-plane"></i>
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                   
                                </form>
                                </div>
                            </div>
                            
                    </div>
                
                </div>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-block btn-outline-dark" type="button">Edit</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-block btn-outline-danger" type="button" onClick={ ()=> {
                            if (window.confirm('Are you sure you want to delete this?')){
                                
                                let token = this.context.token;

                                const api = axiosRestClient({baseUrl: BASE_API_URL, headers:{
                                    auth_token: token
                                }});

                                api.flight.delete(this.props.item.id).then(({data})=>{
                                    console.log(data);
                                    if (data.status === 'success') {alert('deletion sucessful');  this.setState({deleted: true}); }
                                    else alert('deletion failed');
                                }).then(err=>{
                                    console.log(err);
                                    alert('could not delete. something went wrong!');
                                })
                            }

                        }}> Remove</button>
                    </div>
                </div>
            </div> 
            
        ) 
    }

}

export default FlightsListItem;
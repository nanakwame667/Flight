import React, { Component } from 'react';

class CustomersListItem extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Customer ID</h5>
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
                                        <span className="input-group-text">Firstname</span>
                                        </div>
                                        <input className="form-control" type="text" disabled=""/>
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                           
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Middlename</span>
                                        </div>
                                        <input className="form-control" type="text" disabled=""/>
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                           
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Lastname</span>
                                        </div>
                                        <input className="form-control" type="text" disabled=""/>
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
                                        <span className="input-group-text">Username</span>
                                        </div>
                                        <input className="form-control" type="text" disabled=""/>
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
                                        <span className="input-group-text">Email</span>
                                        </div>
                                        <input className="form-control"  type="email" disabled="" />
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Phone</span>
                                        </div>
                                        <input className="form-control" type="phone" disabled=""/>
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fa fa-phone"></i>
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
                                        <span className="input-group-text">Reservations Count</span>
                                        </div>
                                        <input className="form-control"  type="text" disabled="" />
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                           
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Credit</span>
                                        </div>
                                        <input className="form-control"  type="text" disabled="" />
                                        <div className="input-group-append">
                                        <span className="input-group-text">
                                            
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">Password</span>
                                        </div>
                                        <input className="form-control" type="password" />
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
                
                </div>
                <div className="row">
                    <div className="col-6">
                        <button class="btn btn-block btn-outline-dark" type="button">Edit</button>
                    </div>
                    <div className="col-6">
                        <button class="btn btn-block btn-outline-danger" type="button">Remove</button>
                    </div>
                </div>
            </div> 
        ) 
    }

}

export default CustomersListItem;
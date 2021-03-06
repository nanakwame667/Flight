import React, { Component } from 'react';
import AdminHome from './admin-home';
import AdminShowCustomers from './admin-view-customers';
import AdminAddReservation from './admin-add-reservation';

import AppContext from '../../config/app-context';
class AdminTools extends Component {

    static contextType = AppContext;

    state = {
        actiavateViewFor: 'home'
    }

    render(){
        return (

            <div>

                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Admin</li>
                    <li className="breadcrumb-item active" 
                        onClick={() => this.setState({actiavateViewFor: 'home'})}>
                        <button>Tools</button>
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
                                        <input className="form-control" type="text" placeholder="reservation id or name"/>
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
                                {this.state.actiavateViewFor === 'home' && <AdminHome 
                                    showCustomers={() => this.setState({actiavateViewFor: 'show-customers'})}
                                    showAddReservation={() => this.setState({actiavateViewFor: 'add-reservation'})}/>}
                                {this.state.actiavateViewFor === 'add-reservation' && <AdminAddReservation/>}
                                {this.state.actiavateViewFor === 'show-customers' && <AdminShowCustomers/>}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        ) 
    }

}

export default AdminTools;
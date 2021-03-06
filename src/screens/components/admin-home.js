import React, { Component } from 'react';

import AppContext from '../../config/app-context';
class AdminHome extends Component {
    
    static contextType = AppContext;

    render(){
        return (
           
            <div className="card">
            <div className="card-header">
                <strong>Manager</strong> Tools</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron">
                            <h1 className="display-3">Hello, {this.context.admin.firstname}!</h1>
                            <p className="lead">You can add, edit or remove flights or reservations item using this tool.. It also show you the current important statistics</p>
                            <hr className="my-4"/>
                            <p>manage all your reservations and flights made</p>
                            <p className="lead">
                                <span className="btn btn-primary btn-lg mr-1" role="button" onClick={()=>{this.context.activateManager('reservation')}}>Manage Reservations</span>
                                <span className="btn btn-success btn-lg mr-1" role="button" onClick={()=>{this.context.activateManager('flight')}}>Manage Flights</span>
                                <span className="btn btn-secondary btn-lg mr-1" role="button" onClick={()=>{this.props.showCustomers()}}>Manage Customers</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="list-group">
                            <a className="list-group-item active" href="#">Flight default</a>
                            <a className="list-group-item list-group-item-action" href="#">Pheonix OX-3</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                
            </div>
        </div>

        ) 
    }

}

export default AdminHome;
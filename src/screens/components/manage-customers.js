import React, { Component } from 'react';
import AdminAddCustomer from './admin-add-customer';
import AdminViewCustomers from './admin-view-customers';

class ManageCustomer extends Component {

    state = {
        showViewFor: 'customers'
    }

    constructor(props){
        super(props);
    }

    render(){
        return (

            <div>

                <ol className="breadcrumb">
                    <li className="breadcrumb-item" onClick={() => this.setState({showViewFor: 'customers'})}><a href="#">Customers</a></li>
                    <li className="breadcrumb-item active"  onClick={() => this.setState({showViewFor: 'add-customer'})}>
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
                                        <input className="form-control" id="input1-group2" type="text" name="input1-group2" placeholder="name"/>
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
                                {this.state.showViewFor === 'add-customer' && <AdminAddCustomer/>}
                                {this.state.showViewFor === 'customers' && <AdminViewCustomers/>}
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        ) 
    }

}

export default ManageCustomer;
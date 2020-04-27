import React, { Component } from 'react';
import CustomersListItem from './customers-list-item';

class AdminViewCustomers extends Component {

    constructor(props){
        super(props);
    }

    getAllCustomerItems(){
        return [
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 1', email: 'example1@gmail.com', phone: '0240000000'},
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 2', email: 'example2@gmail.com', phone: '0240000000'},
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 3', email: 'example3@gmail.com', phone: '0240000000'},
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 4', email: 'example4@gmail.com', phone: '0240000000'},
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 5', email: 'example5@gmail.com', phone: '0240000000'},
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 6', email: 'example6@gmail.com', phone: '0240000000'},
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 8', email: 'example7@gmail.com', phone: '0240000000'},
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 8', email: 'example8@gmail.com', phone: '0240000000'},
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 9', email: 'example9@gmail.com', phone: '0240000000'},
            {fristname: 'Firstname', middlename: 'MiddlnName', lastname: 'Lastname 10', email: 'example10@gmail.com', phone: '0240000000'}
        ]
    }

    render(){
        return (
               <div className="card">
                  <div className="card-header">
                    <i className="fa fa-align-justify"></i> Customers Items
                    <small> (list of all registered customers)</small>
                  </div>
                  <div className="card-body">
                    <div className="list-group">
                        {
                            this.getAllCustomerItems().map((item, i) => {
                                return <CustomersListItem item={item} key={1}/>
                            })
                        }
                    </div>
                  </div>
                </div>
       
        ) 
    }

}

export default AdminViewCustomers;
import React, { Component } from 'react';

class AdminAddCustomer extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
          
            <div className="card">
            <div className="card-header">
                <strong>Add New Customer</strong> Form</div>
            <div className="card-body">
                <form className="form-horizontal" action="" method="post">
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-firstname">Firstname</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-firstname" type="text" name="hf-firstname" placeholder="Enter Firstname.."/>
                        <span className="help-block">Please enter customer firstname</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-middlename">Firstname</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-middlename" type="text" name="hf-middlename" placeholder="Enter Middlename.."/>
                        <span className="help-block">Please enter customer middlename</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-lastname">lastname</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-lastname" type="text" name="hf-lastname" placeholder="Enter Lastname.."/>
                        <span className="help-block">Please enter customer lastname</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-email">email</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-email" type="email" name="hf-email" placeholder="Enter Email.."/>
                        <span className="help-block">Please enter customer email</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-phone">phone</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-phone" type="phone" name="hf-phone" placeholder="Enter Phone.."/>
                        <span className="help-block">Please enter customer phone</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-address">address</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-address" type="address" name="hf-address" placeholder="Enter Address.."/>
                        <span className="help-block">Please enter customer address</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-description">description</label>
                        <div className="col-md-9">
                        <textarea className="form-control" id="hf-description" type="text" name="hf-description" rows="9" placeholder="Enter Description or Notes.."/>
                        <span className="help-block">Please enter some description about customer (option)</span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-primary" type="submit">
                <i className="fa fa-dot-circle-o"></i> Submit</button>
                <button className="btn btn-sm btn-danger" type="reset">
                <i className="fa fa-ban"></i> Reset</button>
            </div>
        </div>

        ) 
    }

}

export default AdminAddCustomer;
import React, { Component } from 'react';

class AdminAddProduct extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            
            <div className="col-12">
                            
            <div className="card">
                <div className="card-header">
                    <strong>Add New Product</strong> Form</div>
                <div className="card-body">
                    <form className="form-horizontal" action="" method="post">
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label" for="hf-item-name">Product Name</label>
                            <div className="col-md-9">
                            <input className="form-control" id="hf-item-name" type="text" name="hf-item-name" placeholder="Enter product name.."/>
                            <span className="help-block">Please enter the name of the product</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label" for="hf-price">Price</label>
                            <div className="col-md-9">
                            <input className="form-control" id="hf-price" type="text" name="hf-price" placeholder="Enter product price.."/>
                            <span className="help-block">How much does a unit cost?</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label" for="hf-stock-count">Count</label>
                            <div className="col-md-9">
                            <input className="form-control" id="hf-stock-count" type="number" name="hf-stock-count" placeholder="Enter product count.."/>
                            <span className="help-block">How many of the product do you currently have</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <button className="btn btn-sm btn-primary" type="submit">
                    <i className="fa fa-dot-circle-o"></i> Add Product</button>
                    <button className="btn btn-sm btn-danger" type="reset">
                    <i className="fa fa-ban"></i> Reset</button>
                </div>
            </div>

        </div>

        ) 
    }

}

export default AdminAddProduct;
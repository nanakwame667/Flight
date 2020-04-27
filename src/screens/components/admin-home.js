import React, { Component } from 'react';

class AdminHome extends Component {

    constructor(props){
        super(props);
    }
    
    render(){
        return (
           
            <div className="card">
            <div className="card-header">
                <strong>Manager</strong> Tools</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron">
                            <h1 className="display-3">Hello, Admin!</h1>
                            <p className="lead">You can add, edit or remove product item using this tool.. It also show you the current important statistics</p>
                            <hr className="my-4"/>
                            <p>See all your products that are available or add new product</p>
                            <p className="lead">
                                <span className="btn btn-primary btn-lg" role="button" onClick={()=>{this.props.showSeeProducts()}}>See Customers</span>
                                <span className="btn btn-success btn-lg" role="button" onClick={()=>{this.props.showAddProduct()}}>Add Reservation</span>
                                <span className="btn btn-success btn-lg" role="button" onClick={()=>{this.props.showAddProduct()}}>Add Flightyuhnjn                              </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="list-group">
                            <a className="list-group-item active" href="#">Products that are out of stock</a>
                            <a className="list-group-item list-group-item-action" href="#">Olive OX-3</a>
                            <a className="list-group-item list-group-item-action" href="#">FanMilk - Large</a>
                            <a className="list-group-item list-group-item-action" href="#">Theory Of Philis Book</a>
                            <a className="list-group-item list-group-item-action" href="#">Microsof Windows 10</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-danger" type="reset">
                <i className="fa fa-ban"></i> LOGOUT</button>
            </div>
        </div>

        ) 
    }

}

export default AdminHome;
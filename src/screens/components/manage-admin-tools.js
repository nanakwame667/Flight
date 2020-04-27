import React, { Component } from 'react';
import AdminHome from './admin-home';
import AdminViewProducts from './admin-view-products';
import AdminAddProduct from './admin-add-product';
import AdminProductItem from './admin-product-item';


class AdminTools extends Component {

    state = {
        actiavateViewFor: 'home'
    }

    constructor(props){
        super(props);
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
                     <li className="breadcrumb-item"
                        onClick={() => this.setState({actiavateViewFor: 'see-products'})}>
                        <button>Products</button>
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
                                        <input className="form-control" type="text" placeholder="product id or name"/>
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
                                    showSeeProducts={() => this.setState({actiavateViewFor: 'see-products'})}
                                    showAddProduct={() => this.setState({actiavateViewFor: 'add-product'})}/>}
                                {this.state.actiavateViewFor === 'add-product' && <AdminAddProduct/>}
                                {this.state.actiavateViewFor === 'see-products' && <AdminViewProducts/>}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        ) 
    }

}

export default AdminTools;
import React, { Component } from 'react';
import ProductsListItem from './products-list-item';
import ProductItem from './admin-product-item';

class AdminViewProducts extends Component {

    state = {
        item: undefined
    }

    constructor(props){
        super(props);
    }

    getAllProductItems(){
        return [
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10},
            {name: 'Product 1', price: 600, stock: 10}
        ]
    }

    render(){
        return (
                <div className="card">
                  <div className="card-header">
                    <i className="fa fa-align-justify"></i> Products Items
                    <small> (list of all available items)</small>
                  </div>
                  <div className="card-body">
                    {  (typeof this.state.item === "undefined") && <table className="table table-responsive-sm table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Stock</th>
                          <th>Price</th>
                          <th>Level</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                         {
                            this.getAllProductItems().map((item, i) => {
                                return <ProductsListItem item={item} key={1} 
                                        showItem={() => this.setState({item: item})} />
                            })
                        }
                      </tbody>
                    </table>
                    }

                    {
                        (typeof this.state.item !== "undefined") &&  <ProductItem item={this.state.item} 
                                        showList={() => this.setState({item: undefined})}/>
                    }

                    <button className="btn btn-pill btn-block btn-primary col-4 float-right" type="button">Add Product</button>

                  </div>
                </div>
       
        ) 
    }

}

export default AdminViewProducts;
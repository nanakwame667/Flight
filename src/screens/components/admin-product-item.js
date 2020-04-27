import React, { Component } from 'react';

class AdminSeeProduct extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="card">
            <div className="card-header">
              Product Item
            </div>
            <div className="card-body">
              <div id="accordion" role="tablist">
                <div className="card">
                  <div className="card-header" id="headingOne" role="tab">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Name</a>
                    </h5>
                  </div>
                  <div className="collapse show" id="collapseOne" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">Some name</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo" role="tab">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Number in stock</a>
                    </h5>
                  </div>
                  <div className="collapse show" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">13</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree" role="tab">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Unit price</a>
                    </h5>
                  </div>
                  <div className="collapse show" id="collapseThree" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">GHC 200</div>
                  </div>
                </div>
                <div>
                    <button className="btn btn-pill btn-block btn-dark" type="button">Edit</button>
                    <button className="btn btn-pill btn-block btn-danger" type="button">Delete</button>
                    <button className="btn btn-pill btn-block btn-primary" onClick={()=> this.props.showList()} type="button">Back</button>
                </div>
              </div>
            </div>
          </div>
        ) 
    }

}

export default AdminSeeProduct;
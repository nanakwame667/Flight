import React, { Component } from 'react';

class AdminSeeReservation extends Component {

    render(){
        return (
            <div className="card">
            <div className="card-header">
              Customerr Item
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
                    <div className="card-body"> {this.props.item.firstname + " " + (this.props.item.lastname? this.props.item.lastname: '') + " " + (this.props.item.othername? this.props.item.othername: '')} </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo" role="tab">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Email</a>
                    </h5>
                  </div>
                  <div className="collapse show" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body"> {this.props.item.email} </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree" role="tab">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Phone</a>
                    </h5>
                  </div>
                  <div className="collapse show" id="collapseThree" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">{this.props.item.phone}</div>
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

export default AdminSeeReservation;
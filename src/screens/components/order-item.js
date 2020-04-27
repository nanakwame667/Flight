import React, { Component } from 'react';
// import User from '../database/models/user';

class ReservationItem extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                <form className="form-inline" action="" method="post">
                    <div className="form-group col-2">
                        <div className="form-group row">
                        <div className="col-md-8">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                 ID
                              </span>
                            </div>
                            <input className="form-control" id="input1-group1" type="text" name="input1-group1" placeholder="item-id"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-3">
                        <div className="form-group row">
                        <div className="col-md-12">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Name
                              </span>
                            </div>
                            <input className="form-control" type="text" placeholder="Product"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-groupcol-3">
                        <div className="form-group row">
                        <div className="col-md-12">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Count
                              </span>
                            </div>
                            <input className="form-control" type="number" placeholder="1"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-3">
                        <div className="form-group row">
                        <div className="col-md-12">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fa fa-money"></i>Price
                              </span>
                            </div>
                            <input className="form-control" disabled='' type="text" placeholder="GHC 00.00"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-1">
                        <div class="col-12">
                            <button class="btn btn-pill btn-block btn-danger active" type="button" aria-pressed="true">x</button>
                        </div>
                    </div>
                </form>
            </div>
        ) 
    }

}

export default ReservationItem;
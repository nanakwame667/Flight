import React, { Component } from 'react';

class AdminAddReservation extends Component {


    render(){
        return (
          
            <div className="card">
            <div className="card-header">
                <strong>Add New Flight</strong> Form</div>
            <div className="card-body">
                <form className="form-horizontal" action="" method="post">
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-departure-city">Departure City</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-departure-city" type="text" name="hf-departure-city" placeholder="Enter departure city.."/>
                        <span className="help-block">Please enter the departure city</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-arrival-city">Arrival City</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-arrival-city" type="text" name="hf-arrival-city" placeholder="Enter arrival city.."/>
                        <span className="help-block">Please enter the arrival city</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-departure-date">Departure Date</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-departure-date" type="date" name="hf-departure-date" placeholder="Enter departure date.."/>
                        <span className="help-block">Please enter the departure date</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-arrival-date">Arrival Date</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-arrival-date" type="date" name="hf-arrival-date" placeholder="Enter arrival date.."/>
                        <span className="help-block">Please enter the arrival date</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-departure-time">Departure Time</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-departure-time" type="time" name="hf-departure-time" placeholder="Enter departure time.."/>
                        <span className="help-block">Please enter the departure time</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-arrival-time">Arrival Time</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-arrival-time" type="time" name="hf-arrival-time" placeholder="Enter arrival time.."/>
                        <span className="help-block">Please enter the arrival time</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" for="hf-number-of-passengers">Number Of Passengers</label>
                        <div className="col-md-9">
                        <input className="form-control" id="hf-number-of-passengers" type="number" name="hf-number-of-passengers" placeholder="Enter total number of passengers.."/>
                        <span className="help-block">Please enter the number of passengers</span>
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

export default AdminAddReservation;
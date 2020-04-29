import React, { Component } from 'react';
import AppContext from '../../config/app-context';
import { formatDate } from '../../utils/functions';

const { BASE_API_URL } = require('../../utils/constants');
const axiosRestClient = require('axios-rest-client').default;

class AdminAddReservation extends Component {

    state = {};
    static contextType = AppContext;

    submitForm = () => {

        if (this.dep_city.value.trim() === ''){
            this.setState({submitFailed: true, message: 'require departure city!.'});
        }
        else if (this.arr_city.value.trim() === ''){
            this.setState({submitFailed: true, message: 'require arrival city!.'});
        }
        else if (this.arr_city.value.trim().toLowerCase() === this.dep_city.value.trim().toLowerCase()){
            this.setState({submitFailed: true, message: 'departure city and arrival city cant be the same!.'});
        }
        else if (this.dep_date.value.trim() === '' || this.dep_time.value.trim() === ''){
            this.setState({submitFailed: true, message: 'require departure date and time!.'});
        }
        else if (this.arr_date.value.trim() === '' || this.arr_time.value.trim() === ''){
            this.setState({submitFailed: true, message: 'require arrival date and time!.'});
        }
        else if (this.flight_type.value.trim() === ''){
            this.setState({submitFailed: true, message: 'require flight type!.'});
        }
        else if (!this.num_passengers.value){
            this.setState({submitFailed: true, message: 'require number of expected passengers!.'});
        }
        else if (!this.price.value){
            this.setState({submitFailed: true, message: 'require price of flight!.'});
        }
        else{

            let token = this.context.token;       

            const api = axiosRestClient({baseUrl: BASE_API_URL, headers:{
                auth_token: token
            }});

            let depCity = this.dep_city.value.trim();
            let arrCity = this.arr_city.value.trim();
            let depDate = this.buildDateTime(this.dep_date.value, this.dep_time.value);
            let arrDate = this.buildDateTime(this.arr_date.value, this.arr_time.value);
            let fType = this.flight_type.value.toLowerCase().replace(' ', '-');
            let numPass = this.num_passengers.value;
            let fPrice = this.price.value;
            let fPlaneID = this.plane_id.value;

            api.flight.create({
                departureCity: depCity,
                destinationCity: arrCity,
                departureDate: depDate,
                arrivalDate: arrDate,
                flightType: fType,
                totalNumberOfPersons: numPass,
                price: fPrice,
                planeID: fPlaneID
            }).then(({data})=>{
                if (data.status === 'success'){
                    this.setState({submitFailed: false, message: 'you successfully added flight.'});
                }
                else{
                    this.setState({submitFailed: true, message: data.result.error.errors[0].message });
                }
            }).catch(err=>{
                console.log(err);
                this.setState({submitFailed: true, message: 'something went wrong!.'});
            });
        }

    }

    buildDateTime = (date, time) => {
        date = new Date(date);
        time = time.split(':');
        date.setHours(Number(time[0]));
        date.setMinutes(Number(time[1]));
        date.setSeconds(Number(time[2]));
        return date;
    }

    resetForm = () => {
        this.dep_city.value = '';
        this.arr_city.value = '';
        this.dep_date.value = formatDate('YYYY-mm-dd', Date.now());
        this.arr_date.value = formatDate('YYYY-mm-dd', Date.now());
        this.dep_time.value = '00:00:00';
        this.arr_time.value = '00:00:00';
        this.num_passengers.value = 100;
        this.price.value = 250;
        this.plane_id.value = '';
        this.setState({message: null});
    }

    render(){
        return (
          
            <div className="card">
            <div className="card-header">
                <strong>Add New Flight</strong> Form</div>
            <div className="card-body">
                <form className="form-horizontal" action="" method="post">
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-departure-city">Departure City</label>
                        <div className="col-md-9">
                        <input ref={view => this.dep_city = view} className="form-control" id="hf-departure-city" type="text" name="hf-departure-city" placeholder="Enter departure city.."/>
                        <span className="help-block">Please enter the departure city</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-arrival-city">Arrival City</label>
                        <div className="col-md-9">
                        <input ref={view => this.arr_city = view} className="form-control" id="hf-arrival-city" type="text" name="hf-arrival-city" placeholder="Enter arrival city.."/>
                        <span className="help-block">Please enter the arrival city</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-departure-date">Departure Date</label>
                        <div className="col-md-9">
                        <input ref={view => this.dep_date = view} min={formatDate('YYYY-mm-dd', Date.now())} defaultValue={formatDate('YYYY-mm-dd', Date.now())} className="form-control" id="hf-departure-date" type="date" name="hf-departure-date" placeholder="Enter departure date.."/>
                        <span className="help-block">Please enter the departure date</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-arrival-date">Arrival Date</label>
                        <div className="col-md-9">
                        <input ref={view => this.arr_date = view} min={formatDate('YYYY-mm-dd', Date.now())} defaultValue={formatDate('YYYY-mm-dd', Date.now())}  className="form-control" id="hf-arrival-date" type="date" name="hf-arrival-date" placeholder="Enter arrival date.."/>
                        <span className="help-block">Please enter the arrival date</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-departure-time">Departure Time</label>
                        <div className="col-md-9">
                        <input ref={view => this.dep_time = view} className="form-control" id="hf-departure-time" type="time" defaultValue="00:00:00" name="hf-departure-time" placeholder="Enter departure time.."/>
                        <span className="help-block">Please enter the departure time</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-arrival-time">Arrival Time</label>
                        <div className="col-md-9">
                        <input ref={view => this.arr_time = view} className="form-control" id="hf-arrival-time" type="time" defaultValue="00:00:00" name="hf-arrival-time" placeholder="Enter arrival time.."/>
                        <span className="help-block">Please enter the arrival time</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-number-of-passengers">Number Of Passengers</label>
                        <div className="col-md-9">
                        <input ref={view => this.num_passengers = view} min={1} className="form-control" id="hf-number-of-passengers" type="number" defaultValue="100" name="hf-number-of-passengers" placeholder="Enter total number of passengers.."/>
                        <span className="help-block">Please enter the number of passengers</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-flight-type">Flight Type</label>
                        <div className="col-md-9">
                        <select ref={view => this.flight_type = view} className="form-control" id="hf-flight-type" type="text" defaultValue="one-way" name="hf-flight-type" placeholder="Choose flight type..">
                            <option defaultValue='one-way'>One Way</option>
                            <option defaultValue='round-trip'>Round Trip</option>
                        </select>
                        <span className="help-block">What type of flight will this be?</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-price">Price</label>
                        <div className="col-md-9">
                        <input ref={view => this.price = view} min={1} className="form-control" id="hf-price" type="number" name="hf-price" defaultValue="250" placeholder="Enter reservation price.."/>
                        <span className="help-block">How much does a unit cost?</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 col-form-label" htmlFor="hf-plane-id">Plane ID</label>
                        <div className="col-md-9">
                        <input ref={view => this.plane_id = view} className="form-control" id="hf-plane-id" type="text" name="hf-plane-id" placeholder="Enter plane id (optional).."/>
                        <span className="help-block">ID of plane for flight?</span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="card-footer">
                <p className={"lead text-"+(this.state.submitFailed ? "danger":"sucess")}>{this.state.message}</p> 
                <button className="btn btn-sm btn-primary mr-1" type="submit" onClick={()=>{ this.submitForm(); }}>
                <i className="fa fa-dot-circle-o"></i> Submit</button>
                <button className="btn btn-sm btn-danger mr-1" type="reset" onClick={()=>{ this.resetForm(); }}>
                <i className="fa fa-ban"></i> Reset</button>
            </div>
        </div>

        ) 
    }

}

export default AdminAddReservation;
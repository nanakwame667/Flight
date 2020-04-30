import React, { Component } from 'react';
import { formatDate } from '../../utils/functions';

class FlightsListItem extends Component {


    render() {
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">

                <div className="row">

                    <div className="col-4">

                        <div className="card">

                            <div className="card-body">
                                <form action="" method="post">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Departure City</span>
                                            </div>
                                            <span className="form-control">{this.props.item.departureCity}</span>
                                            <div className="input-group-append">
                                                <span className="input-group-text">

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Dep. Date</span>
                                            </div>
                                            <span className="form-control">{formatDate("dd/mm/yy HH:MM", this.props.item.departureDate)}</span>
                                            <div className="input-group-append">
                                                <span className="input-group-text">

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Flight Type</span>
                                            </div>
                                            <span className="form-control">{this.props.item.flightType}</span>
                                            <div className="input-group-append">
                                                <span className="input-group-text">

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="col-4">

                        <div className="card">

                            <div className="card-body">
                                <form action="" method="post">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Arrival City</span>
                                            </div>
                                            <span className="form-control">{this.props.item.destinationCity}</span>
                                            <div className="input-group-append">
                                                <span className="input-group-text">

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Arr. Date</span>
                                            </div>
                                            <span className="form-control">{formatDate("dd/mm/yy HH:MM", this.props.item.arrivalDate)}</span>
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-time"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Flight Price</span>
                                            </div>
                                            <span className="form-control">{this.props.item.price}</span>
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-money"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="col-4">

                        <div className="card">

                            <div className="card-body">
                                <form action="" method="post">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Num of Reservations</span>
                                            </div>
                                            <span className="form-control">{this.props.item.totalNumberOfPersons}</span>
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Plane ID</span>
                                            </div>
                                            <span className="form-control">{this.props.item.planeIDs}</span>
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-plane"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <button className="btn btn-block btn-outline-dark" style={{ width: '100%' }} type="button">Reserve</button>

                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default FlightsListItem;
import React, { Component } from 'react';
import ReservationsListItem from './reservations-list-item';
import ReservationItem from './admin-reservation-item';

class AdminViewReservations extends Component {

    state = {
        item: undefined
    }

    getAllReservationItems(){
        return [
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10},
            {name: 'Reservation 1', price: 600, stock: 10}
        ]
    }

    render(){
        return (
                <div className="card">
                  <div className="card-header">
                    <i className="fa fa-align-justify"></i> Reservations Items
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
                            this.getAllReservationItems().map((item, i) => {
                                return <ReservationsListItem item={item} key={1} 
                                        showItem={() => this.setState({item: item})} />
                            })
                        }
                      </tbody>
                    </table>
                    }

                    {
                        (typeof this.state.item !== "undefined") &&  <ReservationItem item={this.state.item} 
                                        showList={() => this.setState({item: undefined})}/>
                    }

                    <button className="btn btn-pill btn-block btn-primary col-4 float-right" type="button">Add Reservation</button>

                  </div>
                </div>
       
        ) 
    }

}

export default AdminViewReservations;
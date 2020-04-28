import React, { Component } from 'react';

class ReservationsListItem extends Component {

    render(){
        return ( 
            <tr onClick={() => this.props.showItem()}>
                <td>2012/01/01</td>
                <td>Yiorgos Avraamu</td>
                <td>13</td>
                <td>GHC 100</td>
                <td>
                <span className="badge badge-success">Active</span>
                </td>
                 <td>
                    <button className="btn btn-pill btn-block btn-dark" type="button">Pay</button>
                 </td>
                 <td>
                    <button className="btn btn-pill btn-block btn-danger" type="button">Delete</button>
                 </td>
            </tr>
        ) 
    }

}

export default ReservationsListItem;
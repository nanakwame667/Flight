import React, { Component } from 'react';

class Sidebar extends Component {

    constructor(props){
        super(props);
    }

   
render(){

    return (
          <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                    {/* <li className="nav-title">Reservations</li> */}
                        <li className="nav-item">
                            <span className="nav-link" onClick={()=> this.props.onCustomersClick()}>
                                <i className="nav-icon icon-speedometer"></i> Customers
                            </span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=> this.props.onReservationsClick()}>
                                <i className="nav-icon icon-drop"></i> Reservation
                            </a>
                        </li>
                        <li className="nav-item" onClick={()=> this.props.onAdminToolsClick()}>
                            <span className="nav-link">
                                <i className="nav-icon icon-pencil"></i> Admin
                            </span>
                        </li>

                        <li  style={{flex:1}}></li>

                        <li className="nav-item">
                            <span className="nav-link nav-link-danger" onClick={()=> this.props.onLogoutClick()}>
                                <i className="nav-icon icon-layers"></i><strong>LOGOUT</strong>
                            </span>
                        </li>
                    </ul>
                </nav>
        
            </div>
        )

    }

}

export default Sidebar;



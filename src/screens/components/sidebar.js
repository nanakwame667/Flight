import React, { Component } from 'react';
import AppContext from '../../config/app-context';
class Sidebar extends Component {

    static contextType = AppContext;

    render(){

        return (
          <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                    {/* <li className="nav-title">Reservations</li> */}
                        <li className="nav-item">
                            <span className="nav-link" onClick={()=> this.context.activateManager('flight')}>
                                <i className="nav-icon icon-speedometer"></i> Flights
                            </span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=> this.context.activateManager('reservation')}>
                                <i className="nav-icon icon-drop"></i> Reservation
                            </a>
                        </li>
                        <li className="nav-item" onClick={()=> this.context.activateManager('admin-tool')}>
                            <span className="nav-link">
                                <i className="nav-icon icon-pencil"></i> Admin
                            </span>
                        </li>

                        <li  style={{flex:1}}></li>

                        <li className="nav-item">
                            <span className="nav-link nav-link-danger" onClick={()=> this.context.updateState({token: null, admin: null})}>
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



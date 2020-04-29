import React, { Component } from 'react';

import '../assets/core-ui/css/style.css';
import AppContext from '../../config/app-context';

class Header extends Component {
    
    static contextType = AppContext;

    render(){
        return (
            <header className="app-header navbar">
                <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <span>Flight Booky</span>
                </a>
                <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
                <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="nav navbar-nav d-md-down-none">
                    <li className="nav-item px-3">
                        <span className="nav-link" onClick={ event => this.context.activateManager('flight')}>
                            Flights
                        </span>
                    </li>
                    <li className="nav-item px-3">
                        <span className="nav-link"  onClick={ event => this.context.activateManager('reservation')}>
                            Reservations
                        </span>
                    </li>
                    <li className="nav-item px-3">
                        <span className="nav-link"  onClick={ event => this.context.activateManager('admin-tool')}>
                            Admin Tools
                        </span>
                    </li>
                </ul>
                <ul className="nav navbar-nav ml-auto">
               
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <img className="img-avatar" src="img/avatars/6.jpg" alt="admin@flight-booky.com"/>
                    </a>
                </li>
            </ul>
            <button className="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
              <span className="navbar-toggler-icon"></span>
            </button>
            <button className="navbar-toggler aside-menu-toggler d-lg-none" type="button" data-toggle="aside-menu-show">
              <span className="navbar-toggler-icon"></span>
            </button>
          </header>
        ) 
    }

}

export default Header;
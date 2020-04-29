import React, { Component } from 'react';
// import User from '../database/models/user';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import ManageFlights from './components/manage-flights';
import ManageOrders from './components/manage-reservations';
import AdminTools from './components/manage-admin-tools';

import { Redirect} from 'react-router-dom';

import "./assets/images/icons/favicon.ico";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./assets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
import "./assets/vendor/animate/animate.css";	
import "./assets/vendor/css-hamburgers/hamburgers.min.css";
import "./assets/vendor/animsition/css/animsition.min.css";
import "./assets/vendor/select2/select2.min.css";
import "./assets/vendor/daterangepicker/daterangepicker.css";
import "./assets/css/util.css";
import "./assets/css/main.css";

import AppContext from '../config/app-context';

class DashBoardScreen extends Component {

    static contextType = AppContext;

    state={
        activeManagerFor: 'admin-tool'
    }

    constructor(props, context){
        super(props, context);
        this.context.updateState({
             activateManager: (route)=> this.setState({activeManagerFor: route })
        });
    }

    render(){
       
        return (
            (this.context.token === null) ?  <Redirect to='/admin/login'/> :
            <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">

                <Header/>

                <div className="app-body">

                    <Sidebar/>
                    
                    <main className="main">
                        {this.state.activeManagerFor === 'flight' && <ManageFlights/>}
                        {this.state.activeManagerFor === 'reservation' && <ManageOrders/>}
                        {this.state.activeManagerFor === 'admin-tool' && <AdminTools/>}
                    </main>
        
                </div>

                <Footer/>

            </div>
        ) 
    }

}

export default DashBoardScreen;
import React, { Component } from 'react';
// import User from '../database/models/user';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import ManageCustomers from './components/manage-customers';
import ManageOrders from './components/manage-orders';
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
        activeManagerFor: 'reservation'
    }

    render(){
        console.log(this.context)
        return (
            (this.context.token == null) ?  <Redirect to='/admin/login'/> :
            <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">

                <Header 
                    onCustomersClick={()=> this.setState({activeManagerFor: 'customer'})}
                    onReservationsClick={()=> this.setState({activeManagerFor: 'reservation'})}
                    onAdminToolsClick={()=> this.setState({activeManagerFor: 'admin-tool'})}  
                    />

                <div className="app-body">

                    <Sidebar
                        onCustomersClick={()=> this.setState({activeManagerFor: 'customer'})}
                        onReservationsClick={()=> this.setState({activeManagerFor: 'reservation'})}
                        onAdminToolsClick={()=> this.setState({activeManagerFor: 'admin-tool'})}
                        onLogoutClick={() => this.context.updateState({token: null, admin: null})}  
                    />
                    
                    <main className="main">
                        {this.state.activeManagerFor === 'customer' && <ManageCustomers/>}
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
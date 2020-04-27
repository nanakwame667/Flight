import React, { Component } from 'react';
// import User from '../database/models/user';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import ManageCustomers from './components/manage-customers';
import ManageOrders from './components/manage-orders';
import AdminTools from './components/manage-admin-tools';

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

class DashBoardScreen extends Component {

    state={
        activeManagerFor: 'reservation'
    }

    constructor(props){
        super(props);
        console.log(this.state, props.location.state);
    }

    render(){
        return (
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
                        onLogoutClick={() => console.log("loging out")}  
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
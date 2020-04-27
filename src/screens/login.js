import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

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

const axiosRestClient = require('axios-rest-client').default;
const api = axiosRestClient({baseUrl: "http://localhost:5000/admin/"});

// api.users.all()               // GET /users
// api.users.find(1)             // Get /users/1
// api.users.create(data)        // POST /users, body=data
// api.users.update(1, data)     // PUT /users/1, body=data
// api.users.delete(1)           // DELETE /users/1

class LoginScreen extends Component {

    state = {}

    constructor(props){
        super(props);
        this.attemptLogin = this.attemptLogin.bind(this);
    }

    attemptLogin(event) {
        event.preventDefault();
        console.log("attempting signin");
        let username = this.username.value;
        let password = this.password.value;
        
        api.auth.create({
            username: username, 
            password: password
        }).then(({data})=>{
            if (data.status === 'success'){
                this.setState({response: data}); 
            }
        });
    }

    render(){
        
        return (
            (this.state.hasOwnProperty('response')) ?
                <Redirect to={{ pathname: '/admin/dashboard', state: this.state.response }}/> 
            : 
            <div className="App">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                        
                            <form className="login100-form validate-form">
                                <span className="login100-form-title p-b-33">
                                    Account Login
                                </span>

                                <div className="wrap-input100 validate-input" data-validate = "Valid username is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="email" placeholder="Email" ref={view => this.username = view}/>
                                    <span className="focus-input100-1"></span>
                                    <span className="focus-input100-2"></span>
                                </div>

                                <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                                    <input className="input100" type="password" name="pass" placeholder="Password" ref={view => this.password = view}/>
                                    <span className="focus-input100-1"></span>
                                    <span className="focus-input100-2"></span>
                                </div>

                                <div className="container-login100-form-btn m-t-20">
                                    <button className="login100-form-btn" onClick={(event)=>this.attemptLogin(event)}>
                                        Sign in
                                    </button>
                                </div>

                                <div className="text-center p-t-45 p-b-4">
                                
                                </div>

                                <div className="text-center">
                                    <span className="txt1">
                                        Create an account? 
                                    </span>
                                    <NavLink to='/admin/signup' className="txt2 hov1"> Sign up </NavLink>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>   
       );
    
    }

  
}

export default LoginScreen;

import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import "./assets/images/icons/favicon.ico";
// import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./assets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
import "./assets/vendor/animate/animate.css";	
import "./assets/vendor/css-hamburgers/hamburgers.min.css";
import "./assets/vendor/animsition/css/animsition.min.css";
import "./assets/vendor/select2/select2.min.css";
import "./assets/vendor/daterangepicker/daterangepicker.css";
import "./assets/css/util.css";
import "./assets/css/main.css";

const { BASE_API_URL } = require('../utils/constants');

const axiosRestClient = require('axios-rest-client').default;
const api = axiosRestClient({baseUrl: BASE_API_URL});

class SignupScreen extends Component {

    state = {};

    constructor(props){
        super(props)
        this.attemptSignup = this.attemptSignup.bind(this);
    }

    attemptSignup(event){
        event.preventDefault();

        if (this.fullname.value.trim() === ''){
            this.setState({registerFailed: true, message: 'fullname field is empty!'});
        }
        else if (this.username.value.trim() === ''){
            this.setState({registerFailed: true, message: 'username field is empty!'});
        }
        else if (this.password.value.trim().length < 8){
            this.setState({registerFailed: true, message: 'password length must be > 8!'});
        }
        else if (this.password.value.trim() !== this.c_password.value.trim()){
            this.setState({registerFailed: true, message: 'passwords do not match!'});
        }
        else if (this.reg_pass.value.trim() === ''){
            this.setState({registerFailed: true, message: 'registration password is empty!'});
        }
        else{
            let names = this.fullname.value.trim().replace('  ', ' ').split(' ');
            let username = this.username.value.trim();
            let password = this.password.value.trim();
            let reg_pass = this.reg_pass.value.trim();

            api.admin.create({
                firstname: names[0],
                lastname: names.length > 1 ? names[1] : null,
                othername: names.length > 2 ? names[2] : null,
                username: username,
                password: password,
                reg_pass: reg_pass
            }).then(({data})=>{
                if (data.status === 'success'){
                    this.setState({registerFailed: false, redirectToLogin: true});
                }
                else{
                    this.setState({registerFailed: true, message: data.result.message});
                }
            }).catch((err)=>{
                console.log(err);
                this.setState({registerFailed: true, message: 'something went wrong!'});
            });
        }

    }

    render(){
        return (
            this.state.redirectToLogin ? <Redirect to='/admin/login'/> : 

            <div className="App">
                    <div className="limiter">
                        <div className="container-login100">
                            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                            
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title p-b-33">
                                        Account Register
                                    </span>
                                    {this.state.registerFailed && <p className="lead text-center text-danger">{this.state.message}</p> }
                                    <div className="wrap-input100 validate-input" data-validate = "Valid fullname is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="fullname" placeholder="Fullname" ref={view => this.fullname = view}/>
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>


                                    <div className="wrap-input100 validate-input" data-validate = "Valid username is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="username" placeholder="Username" ref={view => this.username = view}/>
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>


                                    <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                                        <input className="input100" type="password" name="pass" placeholder="Password" ref={view => this.password = view}/>
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>

                                    
                                    <div className="wrap-input100 rs1 validate-input" data-validate="Confirm password is required">
                                        <input className="input100" type="password" name="cpass" placeholder="Confirm Password" ref={view => this.c_password = view}/>
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>

                                    <div className="wrap-input100 rs1 validate-input" data-validate="Confirm password is required">
                                        <input className="input100" type="password" name="reg_pass" placeholder="Registration Password" ref={view => this.reg_pass = view}/>
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>


                                    <div className="container-login100-form-btn m-t-20">
                                        <button className="login100-form-btn" onClick={ event => this.attemptSignup(event)}>
                                            Sign up
                                        </button>
                                    </div>

                                    <div className="text-center p-t-45 p-b-4">
                                        <span className="txt1">
                                            Already have an account?
                                        </span>
                                        
                                        <NavLink to='/admin/login' className="txt2 hov1"> Sign in</NavLink>
                                    </div> 

                                </form>
                            </div>
                        </div>
                    </div>
            </div>
            
        );
    
    }

  
}

export default SignupScreen;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import User from '../database/models/user';

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

class SignupScreen extends Component {

    constructor(props){
        super(props)
        this.attemptSignup = this.attemptSignup.bind(this);
    }

    attemptSignup(event){
        event.preventDefault();

        if (this.fullname.value !== '' && this.username.value !== '' && this.c_password.value !== '' && this.username.value !== ''){
            if (this.password.value === this.c_password.value){

                console.log(this.fullname.value);
                console.log(this.username.value);
                console.log(this.password.value);
                console.log(this.c_password.value);

            }
        }

    }

    render(){
        return (
            <div className="App">
                    <div className="limiter">
                        <div className="container-login100">
                            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                            
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title p-b-33">
                                        Account Register
                                    </span>

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

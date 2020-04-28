import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

function SignUpPage(){
   
        return(
            <div clasName="container">
                <div className="row">
                <div className="col-12">
                    <div className="jumbotron">
                        <h1 className="display-3  text-center">{'Opps! 404 Error'}</h1>
                        <p className="lead text-center">{'this page does not exist'}</p>
                        <hr className="my-4"/>
                        <p className=" text-center">{'Flight-Booky'}</p>
                        <center className="lead">
                            <NavLink to='/' className="btn btn-primary btn-lg " role="button"> Go Home </NavLink>  
                        </center>
                    </div>
                    </div>
                </div>
            </div>
        )
    }


export default SignUpPage;
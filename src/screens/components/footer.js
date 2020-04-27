import React, { Component } from 'react';
// import User from '../database/models/user';

import '../assets/core-ui/css/Footer-Dark.css';

class Footer extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer className="app-footer">
                <div>
                    <a href="#">Ajtechub</a>
                    <span>© 2020 developersLabs.</span>
                </div>
                <div className="ml-auto">
                    <span>Powered by</span>
                    <a href="#"> Techup Studio</a>
                </div>
            </footer>
        ) 
    }

}

export default Footer;
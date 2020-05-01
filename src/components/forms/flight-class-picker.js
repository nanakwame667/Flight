import React,{Component} from 'react';

import {Form} from 'react-bootstrap';


export default class FlightClass extends Component{

    constructor(props){
        super(props);
        let fClass = this.props.value;
        this.state={ select: fClass }
        this.handleSelect = this.handleSelect.bind(this);
    }
   
    handleSelect=(event)=>{ 
        this.setState({select: event.target.select});
    }

    render(){
        return(
            <div>
                <Form.Control as="select" select={this.state.select}
                    size="sm" style={{width:'110px',borderRadius:'8px',borderColor:'#00CED1',borderWidth:'2'}} 
                >
                    <option onSelect={this.handleSelect} value='economy' >Economy</option>
                    <option onSelect={this.handleSelect} value='premium-economy' >Premium Economy</option>
                    <option onSelect={this.handleSelect} value='business' >Business</option>
                    <option onSelect={this.handleSelect} value='first-class' >FirstClass</option>
                    <option onSelect={this.handleSelect} value='coach' >Coach</option>
                </Form.Control>
            </div>
    )
}
}
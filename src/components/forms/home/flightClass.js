import React,{Component} from 'react';

import {Form} from 'react-bootstrap';


export default class FlightClass extends Component{
    constructor(props){
        super(props)
        this.state={
            select:'Economy'
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect=(event)=>{
        event=event.target.select
        this.setState({select:event})
    }
    render(){
    return(
        <div>
        <Form.Control as="select" select={this.state.select}
        size="sm" style={{width:'110px',borderRadius:'8px',borderColor:'#00CED1',borderWidth:'2'}} 
        >
        <option onSelect={this.handleSelect} >Economy</option>
        <option onSelect={this.handleSelect} >Premium Economy</option>
        <option onSelect={this.handleSelect} >Business</option>
        <option onSelect={this.handleSelect} >FirstClass</option>
        <option onSelect={this.handleSelect} >Coach</option>
        </Form.Control>
        </div>
    )
}
}
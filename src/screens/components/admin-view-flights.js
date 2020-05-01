import React, { Component } from 'react';
import CustomersListItem from './flights-list-item';
import AppContext from '../../config/app-context';

const axiosRestClient = require('axios-rest-client').default;

const { BASE_API_URL } = require('../../utils/constants');
const api = axiosRestClient({
    baseUrl: BASE_API_URL+'flight/'
});

class AdminViewReservations extends Component {
    
    state = { data: [] }
    static contextType = AppContext;

    constructor(props, context){
        super(props, context);
        this.displayFlights();
    }

    displayFlights = async () => {
        
        let key = this.props.search;
        let whereClause = {};

        if (key){
            whereClause = {
                anyField:  { $like: `%${key}%` } 
            }
        }
      
        api.query.create({
            where: whereClause
        }).then(({data})=>{
            console.log(data)
            if (data.status === 'success'){
                this.setState({data: data.result.data});
            }
        }).catch(err=>{
            console.log(err);
        });

        
    }

    render(){
        return (
               <div className="card">
                  <div className="card-header">
                    <i className="fa fa-align-justify"></i> Flight Items
                    <small> (list of all registered reservations)</small>
                  </div>
                  <div className="card-body">
                    <div className="list-group">
                    {
                        this.state.data.map((item, i)=>{
                            return <CustomersListItem item={item} key={i}/>
                        })
                    }
                    </div>
                  </div>
                </div>
       
        ) 
    }

}

export default AdminViewReservations;
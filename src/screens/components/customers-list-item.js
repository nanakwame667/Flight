import React, { Component } from 'react';
import AppContext from '../../config/app-context';

const { BASE_API_URL } = require('../../utils/constants');
const axiosRestClient = require('axios-rest-client').default;

class CustomersListItem extends Component {

    static contextType = AppContext;

    state = {
      deleted: undefined
    }

    deleteUser = ()=>{
        let token = this.context.token;

        const api = axiosRestClient({
          baseUrl: BASE_API_URL + 'admin/', headers: {
            auth_token: token
          }
        });
    
        if (window.confirm("Are you sure you want to deleter this user?.")){
                
            api.users.delete(this.props.item.id).then(({ data }) => {
                if (data.status === 'success'){
                    this.setState({deleted:true});
                    alert("successfully deleted user "+this.props.item.email);
                }
                else{
                    alert("failed to delete user!.");
                }
            }).catch(err=>{
                console.log(err);
                alert("some error occured!. failed to delete user!.")
            })
        }

    }

    render(){
        return  this.state.delete ? <></> :
            (<tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.firstname + " " + (this.props.item.lastname? this.props.item.lastname: '') + " " + (this.props.item.othername? this.props.item.othername: '')}</td>
                <td>{this.props.item.email}</td>
                <td>{this.props.item.phone}</td>
                 <td>
                    <button onClick={() => this.props.showItem()} className="btn btn-pill btn-block btn-dark" type="button">View</button>
                 </td>
                 <td>
                    <button className="btn btn-pill btn-block btn-danger" onClick={() => this.deleteUser()} type="button">Delete</button>
                 </td>
            </tr>
            ) 
    }

}

export default CustomersListItem;
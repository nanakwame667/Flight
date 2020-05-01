import React, { Component } from 'react';
import CustomersListItem from './customers-list-item';
import CustomerItem from './admin-customer-item';
import AppContext from '../../config/app-context';
import { formatDate } from '../../utils/functions';

const { BASE_API_URL } = require('../../utils/constants');
const axiosRestClient = require('axios-rest-client').default;


class AdminViewReservations extends Component {

  static contextType = AppContext;

  state = {
    item: undefined,
    data: []
  }

  constructor(props, context) {
    super(props, context);
    this.listCustomers();
  }

  listCustomers = () => {
    let token = this.context.token;

    const api = axiosRestClient({
      baseUrl: BASE_API_URL + 'admin/', headers: {
        auth_token: token
      }
    });

    api.users.all().then(({ data }) => {
      console.log(data);
      if (data.status === 'success') {
        this.setState({ data: data.result.data });
      }
    }).catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <i className="fa fa-align-justify"></i> Customers
                    <small> (list of all customer )</small>
        </div>
        <div className="card-body">
          {(typeof this.state.item === "undefined") && <table className="table table-responsive-sm table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((item, i) => {
                  return <CustomersListItem item={item} key={1}
                    showItem={() => this.setState({ item: item })} />
                })
              }
            </tbody>
          </table>
          }

          {
            (typeof this.state.item !== "undefined") && <CustomerItem item={this.state.item}
              showList={() => this.setState({ item: undefined })} />
          }

        </div>
      </div>

    )
  }

}

export default AdminViewReservations;
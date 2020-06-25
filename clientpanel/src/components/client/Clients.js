import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';

import Spinner from '../layouts/Loading'


class Clients extends Component {
    render() {
        const clients = this.props.clients;

        if(clients){
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2><i className="fa fa-users"></i> Clients</h2>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(client => (
                                <tr key={client.id}>
                                    <td>{client.firstName} {client.lastName}</td>
                                    <td>{client.email}</td>
                                    <td>Rs. {client.balance}</td>
                                    <td>
                                        <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                            <i className="fa fa-arrow-circle-right"> Details</i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return <Spinner></Spinner>
        }
    }
}

Clients.propTypes ={
    firestore: PropTypes.object.isRequired,
    clients: PropTypes.array
}

// export default Clients;
export default compose(
    firestoreConnect([{collection : 'clients'}]),
    connect((state,props)=>({
        clients:state.firestore.ordered.clients
    }))
)(Clients)


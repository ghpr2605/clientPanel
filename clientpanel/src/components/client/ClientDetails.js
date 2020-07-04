import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';

import Spinner from '../layouts/Loading'
import classnames from 'classnames'

class ClientDetails extends Component {
    state = {
        showBalanceUpdate: false,
        balanceUpdateAmount: ''
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    balanceSubmit = (e) => {
        e.preventDefault();
        const {client, firestore} = this.props;
        const balanceUpdateAmount = this.state.balanceUpdateAmount;

        const clientUpdate = {
            balance: balanceUpdateAmount
        }

        firestore.update({collection:'clients', doc: client.id}, clientUpdate);
    }

    onDeleteClick = () => {
        const {client, firestore} = this.props;
        firestore.delete({collection:'clients', doc: client.id})
        .then(() => this.props.history.push('/'))
    }

    render() {
        const client = this.props.client;
        const { showBalanceUpdate , balanceUpdateAmount } = this.state;

        let balanceForm = '';

        if(showBalanceUpdate){
            balanceForm = (
                <form onSubmit={this.balanceSubmit}>
                    <div className="input-group">
                        <input
                        type = "text"
                        className="form-control"
                        name="balanceUpdateAmount"
                        placeholder="Add New Balance"
                        value={balanceUpdateAmount}
                        onChange={this.onChange}> 
                        </input>
                        <div className="input-group-append">
                            <input type="submit" value="Update" className="btn btn-outline-dark"></input>
                        </div>
                    </div>
                </form>
            )
        }else{
            balanceForm = null;
        }

        if(client){
            const { id, firstName, lastName, email, phone, balance} = client;
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fa fa-arrow-circle-left"> Back to Dashboard</i>
                        </Link>
                        </div>
                        <div className="col-md-6">
                            <div className="btn-group float-right">
                                <Link to={`/client/edit/${id}`} className="btn btn-dark">
                                    Edit
                                </Link>
                                <button className="btn btn-danger" onClick={this.onDeleteClick}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="card">
                        <h3 className="card-header">{firstName} {lastName}</h3>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-mid-8 col-sm-6">
                                    <h4>Client Id : <span className="text-secondary">{id}</span></h4>
                                </div>
                                <div className="col-mid-4 col-sm-6">
                                    <h3 className="pull-right">
                                        Balance : <span className={classnames({
                                        'text-danger': balance > 0,
                                        'text-success': balance === 0
                                    })}>Rs {balance}</span>
                                    {' '}
                                    <small>
                                        <a href='#!' 
                                        onClick={() => this.setState({showBalanceUpdate: !this.state.showBalanceUpdate})}>
                                            <i className="fa fa-pencil"></i>
                                        </a>
                                    </small>
                                    </h3>
                                    {balanceForm}
                                </div>
                            </div>
                            <hr></hr>
                            <ul className="list-group">
                                <li className="list-group-item"> Email : {email}</li>
                                <li className="list-group-item"> Phone : {phone}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }else{
            return <Spinner></Spinner>
        }
    }
}

ClientDetails.propTypes ={
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        { collection : 'clients', storeAs: 'client', doc: props.match.params.id }
    ]),
    connect(({firestore: {ordered}},props)=>({
        client:ordered.client && ordered.client[0]
    }))
)(ClientDetails)

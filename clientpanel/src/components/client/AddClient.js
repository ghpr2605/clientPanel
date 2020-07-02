import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class AddClient extends Component {
    state = {
        firstName: "",
        lastName: "",
        email:"",
        phone:"",
        balance:""
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value});

    onSubmit = (e) => {
        e.preventDefault();

        const newclient = this.state;

        if(!newclient.balance){
            newclient.balance = 0;
        }

        this.props.firestore.add({collection:"clients"}, newclient)
        .then(() => {this.props.history.push("/")})
    }
    render() {
        const {disableBalanceOnAdd} = this.props.settings;
        const { firstName, lastName, email, phone, balance} = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fa fa-arrow-circle-left"> Back to Dashboard</i>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Add Client</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                required
                                onChange={this.onChange}
                                value={firstName}>   
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                required
                                onChange={this.onChange}
                                value={lastName}>   
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={email}>   
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                type="text"
                                className="form-control"
                                name="phone"
                                required
                                minLength="10"
                                onChange={this.onChange}
                                value={phone}>   
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance">Balance</label>
                                <input
                                type="text"
                                className="form-control"
                                name="balance"
                                onChange={this.onChange}
                                value={balance}
                                disabled={disableBalanceOnAdd}>   
                                </input>
                            </div>
                            <input type="submit" value="Submit" className="btn btn-primary btn-block"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

AddClient.propTypes ={
    firestore: PropTypes.object.isRequired,
    settings : PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(),
    connect((state,props) => ({
        settings: state.settings
    }))
)(AddClient);

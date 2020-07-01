import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import {notifyUser} from '../../actions/notifyActions';
import Alert from '../layouts/Alert'


class Register extends Component {
    state ={
        email: '',
        password: ''
    }

    componentWillMount(){
        const {allowRegistration} = this.props.settings;

        if(!allowRegistration){
            this.props.history.push('/');
        }
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        const {firebase, notifyUser} = this.props;
        const {email, password} = this.state;

        firebase.createUser({email,password}).catch(err => notifyUser('That User Already Exist..!!', 'error'))
    }

    render() {
        const {message, messageType} = this.props.notify;
        const {email, password} = this.state;

        return (
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            {message ? (
                                <Alert message={message} messageType={messageType}></Alert>
                            ) : null}
                            <h1 className="text-center pb-4 pt-3">
                                <span className="text-primary">
                                    <i className="fa fa-lock"></i>
                                    {' '} Register
                                </span>
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={this.onChange}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    required
                                    value={password}
                                    onChange={this.onChange}></input>
                                </div>
                                <input type="submit" value="Register" className="btn btn-primary btn-block"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes ={
    firebase: PropTypes.object.isRequired,
    notify: PropTypes.object.isRequired,
    notifyUser: PropTypes.func.isRequired
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        notify : state.notify,
        settings : state.settings
    }), {notifyUser})
)(Register);

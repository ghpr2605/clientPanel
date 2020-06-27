import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setDisabledBalanceOnAdd, setDisabledBalanceOnEdit, setAllowRegistration} from '../../actions/settingsActions'

class Settings extends Component {

    allowRegistrationChange = () => {
        const { setAllowRegistration } = this.props;

        setAllowRegistration();
    };
    disableBalanceOnAddChange = () => {
        const { setDisabledBalanceOnAdd } = this.props;

        setDisabledBalanceOnAdd();
    };
    disableBalanceOnEditChange = () => {
        const { setDisabledBalanceOnEdit } = this.props;

        setDisabledBalanceOnEdit();
    };

    render() {
        const { disableBalanceOnAdd, disableBalanceOnEdit, allowRegistration} = this.props.settings;

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fa fa-arrow-circle-left">Back To Dashboard</i>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Edit Setting</div>
                    <div className="card-body">
                        <form>
                        <div className="form-group">
                            <label>Allow Registration</label>{' '}
                            <input 
                            type="checkbox" 
                            name="allowRegistration" 
                            checked={!!allowRegistration} 
                            onChange = {this.allowRegistrationChange}></input>
                        </div>
                        <div className="form-group">
                            <label>Disable Balance On Add</label>{' '}
                            <input 
                            type="checkbox" 
                            name="disableBalanceOnAdd" 
                            checked={!!disableBalanceOnAdd} 
                            onChange = {this.disableBalanceOnAddChange}></input>
                        </div>
                        <div className="form-group">
                            <label>Disable Balance On Edit</label>{' '}
                            <input 
                            type="checkbox" 
                            name="disableBalanceOnEdit" 
                            checked={!!disableBalanceOnEdit} 
                            onChange = {this.disableBalanceOnEditChange}></input>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Settings.propTypes = {
    settings : PropTypes.object.isRequired,
    setDisabledBalanceOnAdd : PropTypes.func.isRequired,
    setDisabledBalanceOnEdit : PropTypes.func.isRequired,
    setAllowRegistration : PropTypes.func.isRequired
}

export default connect((state,props) => ({
    auth : state.firebase.auth,
    settings : state.settings
}),{ setAllowRegistration, setDisabledBalanceOnAdd, setDisabledBalanceOnEdit})(Settings);

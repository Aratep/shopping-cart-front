import React, {Component} from 'react';
import {reset} from 'redux-form';

import RegisterTemplate from './RegisterTemplate';
import {registration} from '../../services/auth-service';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            regStatus: '',
            redirectToReferrer: false
        }
    }

    handleSubmit = (values, dispatch) => {
        registration(JSON.stringify(values))
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    console.log(response)
                    dispatch(reset('register'));
                    this.setState({
                        redirectToReferrer: true,
                    })
                }
                return response.json()
            })
            .then(body => {
                console.log(body)
                this.setState({
                    regStatus: body.message,
                })
            })
            .catch(err => {
                this.setState({
                    regStatus: 'Server is no available. Please try later',
                })
            });
        this.setState({
            regStatus: '',
        })
    }

    render() {
        const {regStatus, redirectToReferrer} = this.state;
        const {from} = this.props.location.state || {from: {pathname: '/my-account'}};

        return (
            <RegisterTemplate
                onSubmit={this.handleSubmit}
                regStatus={regStatus}
                redirectToReferrer={redirectToReferrer}
                from={from}
            />
        );
    }
}

export default Register;
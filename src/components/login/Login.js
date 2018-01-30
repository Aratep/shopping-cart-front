import React, {Component} from 'react';
import {reset} from 'redux-form';
import jwt from 'jsonwebtoken';

import LoginTemplate from './LoginTemplate';
import {login, getToken} from '../../services/auth-service';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            loginStatus: '',
            redirectToReferrer: false,
            token: null
        }
    }

    componentWillMount() {
        this.getApiToken();
    }

    getApiToken = () => {
        getToken()
            .then(response => {
                return response.json()
            })
            .then(body => {
                localStorage.setItem('tokenToVerify', body.token);
                this.setState({token: body.token})
            })
            .catch(err => {
                console.log(err)
            });
    }

    handleSubmit = (values, dispatch) => {
        const {token} = this.state;
        const username = values.username;
        const password = values.password;

        login(JSON.stringify({username, password, token}))
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    dispatch(reset('loginForm'));
                    this.setState({
                        registerStatus: '',
                    })
                }
                console.log(response)

                return response.json()
            })
            .then(body => {
                if (body.token) {
                    jwt.verify(body.token, 'secret_key', (err, decoded) => {
                        if (err) console.log(err);
                    })
                }
                this.setState({
                    loginStatus: body.message,
                    redirectToReferrer: true
                })
                localStorage.setItem('userToken', body.token);
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loginStatus: 'Server is no available. Please try later',
                })
            });
        this.setState({
            registerStatus: '',
        })
    }

    render() {
        const {loginStatus, redirectToReferrer} = this.state;
        const {from} = this.props.location.state || {from: {pathname: '/products/products-list'}};

        return (
            <LoginTemplate
                 onSubmit={this.handleSubmit}
                loginStatus={loginStatus}
                redirectToReferrer={redirectToReferrer}
                from={from}
            />
        );
    }
}

export default Login;
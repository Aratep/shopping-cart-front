import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link, Redirect} from 'react-router-dom';

import {renderField} from '../../tag-creator/TagCreator';
import validate from '../../validators/login';

class LoginTemplate extends Component {
    render() {
        const {handleSubmit, loginStatus, redirectToReferrer} = this.props;
        // const {handleSubmit} = this.props;
        // console.log(redirectToReferrer);


        return (
            <div className="container">
                <div className="custom-row">
                    <form onSubmit={handleSubmit}>
                        <p className='validation-error'>
                            {loginStatus}
                        </p>
                        <div>
                            <Field
                                tagName='input'
                                name="username"
                                id='username'
                                className='input w3-input w3-border'
                                type="text"
                                htmlFor='username'
                                placeholder="username"
                                label='username'
                                component={renderField}
                            />
                        </div>
                        <div>
                            <Field
                                tagName='input'
                                name="password"
                                id='password'
                                className='input w3-input w3-border'
                                type="password"
                                htmlFor='password'
                                placeholder="password"
                                label='password'
                                component={renderField}
                            />
                        </div>
                        <div className="wrapper">
                            <span className="group-btn">
                                <input
                                    className="w3-button w3-red w3-margin-bottom button"
                                    type="submit" value="Login"/>
                            </span>
                        </div>
                    </form>
                    <p className="change_link">
                        Not a member yet ?
                        <Link to='/register'>Join us</Link>
                    </p>
                </div>
                {
                    redirectToReferrer === true && <Redirect to='/my-account'/>
                }
            </div>
        );
    }
}

export default reduxForm({
    form: 'loginForm',
    validate,
})(LoginTemplate)

import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link, Redirect} from 'react-router-dom';

import {renderField} from '../../tag-creator/TagCreator';
import validate from '../../validators/login';

class LoginTemplate extends Component {
    render() {
        const {handleSubmit, loginStatus, redirectToReferrer, loading} = this.props;

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
                    {
                        loading === true &&
                        <div>
                            <img alt='loading'
                                 src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                        </div>
                    }
                    <p className="change_link">
                        Not a member yet ?
                        <Link to='/register'>Join us</Link>
                    </p>
                </div>
                {
                    redirectToReferrer  && <Redirect to='/products-list'/>
                }
            </div>
        );
    }
}

export default reduxForm({
    form: 'loginForm',
    validate,
})(LoginTemplate)

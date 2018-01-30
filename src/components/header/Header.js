import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import jwt from 'jsonwebtoken';

import {AuthButton} from '../../services/auth-service';

class Header extends Component {
    decodeUser = (token) => {
        console.log(token);
        let user ;
        if(token !== undefined) {
            jwt.verify(token, 'secret_key', (err, decoded) => {
                if (err) console.log(err);
                user = decoded;
            })
        }
        return user;
    }

    render() {
        const currentUserToken = localStorage.getItem('userToken');
        // const currentUser = this.decodeUser(currentUserToken);
        // if(currentUser === undefined) {
        //     return null
        // }
        // console.log(currentUser);

        return (
            <div className='grey'>
                <div className="w3-hide-large" style={{marginTop: 83 + "px"}}/>
                <header className="w3-container w3-xlarge">
                    <p className="w3-left">Watch</p>
                    <p className="w3-right">
                        <Link to='/my-account'>
                        <span className='w3-margin-right font-size'>
                            {
                                currentUserToken && <span className='w3-margin-right font-size'> <AuthButton/></span>
                            }
                            My Account
                        </span>
                        </Link>
                        <i className="fa fa-user w3-margin-right"/>
                        <i className="fa fa-shopping-cart w3-margin-right"/>
                        <i className="fa fa-search"/>
                    </p>
                </header>
            </div>
        );
    }
}

export default Header;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {AuthButton} from '../../services/auth-service';

class Header extends Component {
    render() {
        const currentUserToken = localStorage.getItem('userToken');

        return (
            <div className='grey'>
                <div className="w3-hide-large" style={{marginTop: 83 + "px"}}/>
                <header className="w3-container w3-xlarge">
                    <p className="w3-left ">
                        <Link to='/products-list' className='decor-non'>Products</Link>
                    </p>
                    <p className="w3-right">
                        <span className='w3-margin-right font-size'>
                            {
                                currentUserToken ? <span className='w3-margin-right font-size'>
                                    <AuthButton/>
                                </span> : <span className='w3-margin-right font-size'>
                                    <Link to='/login'>Sign In</Link>
                                </span>
                            }
                        </span>
                        <Link to='/my-account' className=' w3-margin-right'>
                            {/*My Account*/}
                            <i className="fa fa-user w3-margin-right"/>
                        </Link>
                        <Link to='/my-cart'>
                            <i className="fa fa-shopping-cart w3-margin-right"/>
                        </Link>
                    </p>
                </header>
            </div>
        );
    }
}

export default Header;

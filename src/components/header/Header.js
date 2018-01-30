import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='grey'>
                <div className="w3-hide-large" style={{marginTop: 83 + "px"}}/>

                <header className="w3-container w3-xlarge">
                    <p className="w3-left">Watch</p>
                    <p className="w3-right">
                        <Link to='/login'>
                        <span className='w3-margin-right font-size'>
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

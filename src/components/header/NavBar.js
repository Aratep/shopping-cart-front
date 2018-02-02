import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="w3-sidebar w3-bar-block back-color w3-collapse w3-top"
                     style={{Zindex: "3", width: 250 + "px"}}
                     id="mySidebar">
                    <div className="w3-container w3-display-container w3-padding-16">
                        <i className="fa fa-remove w3-hide-large w3-button w3-display-topright"/>
                        <h3 className="w3-wide">
                            <Link to='/products-list'>
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR755vR128JIUZf3ufiz8fJkaCG1ue5xjMLjYUbun2t30N5LfLLFw'
                                    className='logo-large' alt="logo"/>
                            </Link>
                        </h3>
                    </div>
                    <div className="w3-padding-64 w3-large w3-text-grey" style={{fontWeight: "bold"}}>
                    </div>
                    <a className="w3-bar-item w3-button w3-padding">Newsletter</a>
                    <a className="w3-bar-item w3-button w3-padding">Subscribe</a>

                </nav>

                <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
                    <div className="w3-bar-item w3-padding-24 w3-wide">
                        <Link to='/products-list'>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR755vR128JIUZf3ufiz8fJkaCG1ue5xjMLjYUbun2t30N5LfLLFw'
                                className='logo' alt="logo"/>
                        </Link>
                    </div>
                </header>
            </div>

        );
    }
}

export default NavBar;

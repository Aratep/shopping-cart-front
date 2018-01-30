import React, {Component} from 'react';

import Subscribe from "./Subscribe";

class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    <Subscribe/>

                    <footer className="w3-padding-64 w3-light-grey w3-small w3-center" id="footer">
                        <div className="w3-row-padding">
                            <div className="w3-col s4">
                                <h4>Contact</h4>
                                <p>Questions? Go ahead.</p>
                                <form action="" target="_blank">
                                    <p><input className="w3-input w3-border" type="text" placeholder="Name" name="Name"
                                              required/></p>
                                    <p><input className="w3-input w3-border" type="text" placeholder="Email"
                                              name="Email"
                                              required/></p>
                                    <p><input className="w3-input w3-border" type="text" placeholder="Subject"
                                              name="Subject" required/></p>
                                    <p><input className="w3-input w3-border" type="text" placeholder="Message"
                                              name="Message" required/></p>
                                    <button type="submit" className="w3-button w3-block w3-black">Send</button>
                                </form>
                            </div>

                            <div className="w3-col s4">
                                <h4>About</h4>
                                <p><a>About us</a></p>
                                <p><a>We're hiring</a></p>
                                <p><a>Support</a></p>
                                <p><a>Find store</a></p>
                                <p><a>Shipment</a></p>
                                <p><a>Payment</a></p>
                                <p><a>Gift card</a></p>
                                <p><a>Return</a></p>
                                <p><a>Help</a></p>
                            </div>

                            <div className="w3-col s4 w3-justify">
                                <h4>Store</h4>
                                <p><i className="fa fa-fw fa-map-marker"/> Company Name</p>
                                <p><i className="fa fa-fw fa-phone"/> 0044123123</p>
                                <p><i className="fa fa-fw fa-envelope"/> ex@mail.com</p>
                                <h4>We accept</h4>
                                <p><i className="fa fa-fw fa-cc-amex"/> Amex</p>
                                <p><i className="fa fa-fw fa-credit-card"/> Credit Card</p>
                                <br/>
                                <i className="fa fa-facebook-official w3-hover-opacity w3-large"/>
                                <i className="fa fa-instagram w3-hover-opacity w3-large"/>
                                <i className="fa fa-snapchat w3-hover-opacity w3-large"/>
                                <i className="fa fa-pinterest-p w3-hover-opacity w3-large"/>
                                <i className="fa fa-twitter w3-hover-opacity w3-large"/>
                                <i className="fa fa-linkedin w3-hover-opacity w3-large"/>
                            </div>
                        </div>
                    </footer>

                    <div className="w3-black w3-center w3-padding-24">Powered by <a
                        href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w3-hover-opacity">w3.css</a></div>

                </div>

                <div id="newsletter" className="w3-modal">
                    <div className="w3-modal-content w3-animate-zoom" style={{padding: 32 + "px"}}>
                        <div className="w3-container w3-white w3-center">
                            <i
                                className="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"/>
                            <h2 className="w3-wide">NEWSLETTER</h2>
                            <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
                            <p><input className="w3-input w3-border" type="text" placeholder="Enter e-mail"/></p>
                            <button type="button" className="w3-button w3-padding-large w3-red w3-margin-bottom">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;

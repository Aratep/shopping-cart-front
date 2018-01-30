import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <div className=''>
                {/*<div className="w3-overlay w3-hide-large"*/}
                {/*style={{cursor: "pointer"}}*/}
                {/*title="close side menu" id="myOverlay"/>*/}
                <div className="w3-display-container w3-container">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Jeans"
                        className='main-img'
                        style={{width: 100 + "%"}}
                    />
                    <div className="top-left w3-text-white" style={{padding: 24 + "px" + 48 + "px"}}>
                        <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
                        <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
                        <h1 className="w3-hide-small">COLLECTION 2016</h1>
                        <p>
                            <a className="w3-button w3-black w3-padding-large w3-large">
                                ADD TO CART
                            </a>
                        </p>
                    </div>
                </div>

                <div className="w3-container w3-text-grey" id="jeans">
                    <p>8 items</p>
                </div>

                <div className="w3-row w3-grayscale">
                    <div className="w3-col l3 s6">
                        <div className="w3-container">
                            <img src="https://www.w3schools.com/w3images/jeans1.jpg"  alt="Jeans"
                                 style={{width: 100 + "%"}}/>
                            <div className="w3-display-middle w3-display-hover">
                                <button className="w3-button w3-black">Add To Cartss
                                    <i className="fa fa-shopping-cart"/>
                                </button>
                            </div>
                            <p>Ripped Skinny Jeans<br/><b>$24.99</b></p>
                        </div>
                        <div className="w3-container">
                            <img src="https://www.w3schools.com/w3images/jeans2.jpg" alt="Jeans"
                                 style={{width: 100 + "%"}}/>
                            <div className="w3-display-middle w3-display-hover">
                                <button className="w3-button w3-black">Add To Cartrrr
                                    <i className="fa fa-shopping-cart"/>
                                </button>
                            </div>
                            <p>Mega Ripped Jeans<br/><b>$19.99</b></p>
                        </div>
                    </div>

                    <div className="w3-col l3 s6">
                        <div className="w3-container">
                            <div className="w3-display-container">
                                <img src="https://www.w3schools.com/w3images/jeans2.jpg"  alt="Jeans"
                                     style={{width: 100 + "%"}}/>
                                <span className="w3-tag w3-display-topleft">New</span>
                                <div className="w3-display-middle w3-display-hover">
                                    <button className="w3-button w3-black">Add To Cartrreer
                                        <i className="fa fa-shopping-cart"/>
                                    </button>
                                </div>
                            </div>
                            <p>Mega Ripped Jeans<br/><b>$19.99</b></p>
                        </div>
                        <div className="w3-container">
                            <img src="https://www.w3schools.com/w3images/jeans2.jpg" alt="Jeans"
                                 style={{width: 100 + "%"}}/>
                            <div className="w3-display-middle w3-display-hover">
                                <button className="w3-button w3-black">Add To Cartrerer
                                    <i className="fa fa-shopping-cart"/>
                                </button>
                            </div>
                            <p>Washed Skinny Jeans<br/><b>$20.50</b></p>
                        </div>
                    </div>

                    <div className="w3-col l3 s6">
                        <div className="w3-container ">
                            <img src="https://www.w3schools.com/w3images/jeans2.jpg" alt="Jeans"
                                 style={{width: 100 + "%"}}/>
                            <div className="w3-display-middle w3-display-hover">
                                <button className="w3-button w3-black">Add To Cartvasdfasdf
                                    <i className="fa fa-shopping-cart"/>
                                </button>
                            </div>
                            <p>Washed Skinny Jeans<br/><b>$20.50</b></p>
                        </div>
                        <div className="w3-container">
                            <div className="w3-display-container">
                                <img src="https://www.w3schools.com/w3images/jeans2.jpg" alt="Jeans"
                                     style={{width: 100 + "%"}}/>
                                <span className="w3-tag w3-display-topleft">Sale</span>
                                <div className="w3-display-middle w3-display-hover">
                                    <button className="w3-button w3-black">Add To Cartvasdfasdf
                                        <i className="fa fa-shopping-cart"/>
                                    </button>
                                </div>
                            </div>
                            <p>Vintage Skinny Jeans<br/><b className="w3-text-red">$14.99</b></p>
                        </div>
                    </div>

                    <div className="w3-col l3 s6">
                        <div className="w3-container">
                            <img src="https://www.w3schools.com/w3images/jeans2.jpg" alt="Jeans"
                                 style={{width: 100 + "%"}}/>
                            <div className="w3-display-middle w3-display-hover">
                                <button className="w3-button w3-black">Add To Cartvasdfasdf
                                    <i className="fa fa-shopping-cart"/>
                                </button>
                            </div>
                            <p>Vintage Skinny Jeans<br/><b>$14.99</b></p>
                        </div>
                        <div className="w3-container">
                            <img src="https://www.w3schools.com/w3images/jeans2.jpg" alt="Jeans"
                                 style={{width: 100 + "%"}}/>
                            <div className="w3-display-middle w3-display-hover">
                                <button className="w3-button w3-black">Add To Cartvsadfa
                                    <i className="fa fa-shopping-cart"/>
                                </button>
                            </div>
                            <p>Ripped Skinny Jeans<br/><b>$24.99</b></p>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Content;

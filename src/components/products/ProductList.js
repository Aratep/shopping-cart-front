import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';

import {getAllProducts} from '../../services/product-service';
import {getToken} from '../../services/auth-service';
import {allProducts} from '../../actions/index';

class ProductList extends Component {

    componentDidMount() {
        this.getApiToken();
        this.getProductList();
    }

    getApiToken = () => {
        getToken()
            .then(response => {
                return response.json()
            })
            .then(body => {
                localStorage.setItem('tokenToVerify', body.token)
            })
            .catch(err => {
                console.log(err)
            });
    };

    getProductList = () => {
        const {dispatch} = this.props;

        getAllProducts()
            .then((response) => {
                return response.json();
            })
            .then(products => {
                // console.log(products);
                dispatch(allProducts(products.products, products.variants, products.count))
            })
            .catch((err) => {
                console.log(err)
            });
    };


    render() {
        const {products, variants, count} = this.props.products;

        if (products === undefined || variants === undefined) {
            return <div className="w3-center">
                <ReactLoading color='black'/>
            </div>
        }
        // console.log(products);
        // console.log(variants);

        return (
            <div className="">
                <div className="w3-display-container w3-container">
                    <img
                        src="./images/main.jpeg"
                        alt="logo"
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

                <div className="w3-container w3-text-grey">
                    <h2>{count} items</h2>
                </div>

                <div className="w3-row w3-grayscale">
                    {
                        products.map((product, index) => {
                            // console.log(product);
                            return <div className="w3-col l3 s6" key={index}>
                                <div className="w3-container">
                                    <div className="w3-display-container">
                                        <Link to={`/product-list/product/${product._id}`}>
                                            <img src={product.imagePath}
                                                 alt={product.imagePath}
                                                 style={{width: 100 + "%"}}
                                                 className='img-style'
                                            />
                                        </Link>
                                        <div className="w3-display-middle w3-display-hover">
                                            <button className="w3-button w3-black">Add To Cart
                                                <i className="fa fa-shopping-cart"/>
                                            </button>
                                        </div>
                                        <p>{product.name}<br/><b>${product.price}</b></p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProductList;
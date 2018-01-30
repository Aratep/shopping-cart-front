import React, {Component} from 'react';
import jwt from 'jsonwebtoken';
import ReactLoading from 'react-loading';

import {getAllProducts} from '../../services/product-service';
import {getToken} from '../../services/auth-service';
import { singleProduct} from "../../actions";

class SingleProduct extends Component {

    componentDidMount() {
        this.getApiToken();
        this.getProductList();
    }

    getProductList = () => {
        const {dispatch} = this.props;
        const id = this.props.match.params.id;

        getAllProducts()
            .then((response) => {
                return response.json();
            })
            .then(products => {
                // console.log(products);
                const product = products.products.filter(prod => prod._id === id);
                const variants = products.variants.filter(variant => variant.prod_id === id);
                // console.log(product);
                // console.log(variant);
                dispatch(singleProduct(product, variants))
            })
            .catch((err) => {
                console.log(err)
            });
    };

    getApiToken = () => {
        getToken()
            .then(response => {
                return response.json()
            })
            .then(body => {
                this.setState({token: body.token})
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        const {product} = this.props;

        if(product.length <=0 ){
            return <ReactLoading color='black'/>
        }
        // console.log(product.product)
        // console.log(product.prod_variants)

        return (
            <div className='w3-center'>
                <h1>Single product</h1>
                <div>
                    {
                        product.product.map((prod, ind) => {
                            console.log(prod)
                            return <div key={ind} className=''>
                                <img src={prod.imagePath}/>
                                <div>Price: <b>{prod.price}</b></div>
                                <div>Available Quantity: <b>{prod.available_quantity}</b></div>
                                <div>Status: <b>{prod.status}</b></div>
                                <div>Product Description: <b>{prod.description}</b></div>
                                {
                                    product.prod_variants.map((variant, index) => {
                                        return <div key={index}>

                                        </div>
                                    })
                                }
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SingleProduct
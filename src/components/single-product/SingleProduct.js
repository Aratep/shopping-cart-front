import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';

import {getAllProducts} from '../../services/product-service';
import {getToken} from '../../services/auth-service';
import {singleProduct} from "../../actions";

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
    };


    render() {
        const {product} = this.props;

        if (product.length <= 0) {
            return <ReactLoading color='black'/>
        }
        // console.log(product.product)
        console.log(product.prod_variants)

        return (
            <div>
                <div className=''>
                    <div>
                        {
                            product.product.map((prod, ind) => {
                                console.log(prod)
                                return <div key={ind} className=''>
                                    <h1>{prod.name}</h1>
                                    <img src={prod.imagePath} alt={prod.name}/>
                                    <div><b>Price:</b> {prod.price}</div>
                                    <div><b>Available Quantity:</b> {prod.available_quantity}</div>
                                    <div><b>Status:</b> <b>{prod.status}</b></div>
                                    <div><b>Product Description:</b> {prod.description}</div>
                                </div>
                            })
                        }
                        <div className=' '>
                            {
                                product.prod_variants.length <= 0 ? <h3>Have No Variants</h3> :
                                    <h3>Product's Variants</h3>}
                            {
                                product.prod_variants.map((variant, index) => {
                                    console.log(variant)
                                    return <div key={index} className='w3-container'>
                                        <div className='w3-display-container'>
                                            <img src={variant.variant_image_path} alt={variant.variant_name}/>
                                            <div><b>Variant Name:</b> {variant.variant_name}</div>
                                            <div><b>Variant Price:</b> {variant.variant_price}</div>
                                            <div><b>Variant Status:</b> <b>{variant.variant_status}</b></div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
                <Link to='/products-list'>Back</Link>
            </div>
        )
    }
}

export default SingleProduct
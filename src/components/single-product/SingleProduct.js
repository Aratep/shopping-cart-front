import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';

import {getAllProducts} from '../../services/product-service';
import {singleProduct} from "../../actions";

class SingleProduct extends Component {

    componentDidMount() {
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
                const product = products.products.filter(prod => prod._id === id);
                dispatch(singleProduct(product, product.variants))
            })
            .catch((err) => {
                console.log(err)
            });
    };

    render() {
        const {product} = this.props;

        if (product.length <= 0) {
            return <ReactLoading color='black' type='spokes' className="center"/>
        }

        // console.log(product)

        return (
            <div>
                <div className=''>
                    <div>
                        {
                            product.product.map((prod, index) => {
                                return <div key={index} className='box'>
                                    <h1>{prod.name}</h1>
                                    <img src={prod.imagePath} alt={prod.name} className='img-style'/>
                                    <div><b>Price:</b> {prod.price}</div>
                                    <div><b>Available Quantity:</b> {prod.available_quantity}</div>
                                    <div><b>Status:</b> <b>{prod.status}</b></div>
                                    <div><b>Product Description:</b> {prod.description}</div>
                                    {
                                        prod.variants.length <= 0 ? <h3>Have No Variants</h3> :
                                            <h3>Product's Variants</h3>
                                    }
                                    {
                                        prod.variants.map((variant, ind) => {
                                            return <div key={ind} className='box'>
                                                <div className=''>
                                                    <img src={variant.variant_image_path}
                                                         alt={variant.variant_name}
                                                         className='img-style'/>
                                                    <div><b>Variant Name:</b> {variant.variant_name}</div>
                                                    <div><b>Variant Price:</b> {variant.variant_price}</div>
                                                    <div><b>Variant Status:</b> <b>{variant.variant_status}</b></div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            })
                        }
                        <div className=' '>
                            {/*{*/}
                                {/*product.prod_variants.length <= 0 ? <h3>Have No Variants</h3> :*/}
                                    {/*<h3>Product's Variants</h3>*/}
                            {/*}*/}
                            {
                                // product.prod_variants.map((variant, index) => {
                                //     return <div key={index} className='box'>
                                //         <div className=''>
                                //             <img src={variant.variant_image_path}
                                //                  alt={variant.variant_name}
                                //                  className='img-style'/>
                                //             <div><b>Variant Name:</b> {variant.variant_name}</div>
                                //             <div><b>Variant Price:</b> {variant.variant_price}</div>
                                //             <div><b>Variant Status:</b> <b>{variant.variant_status}</b></div>
                                //         </div>
                                //     </div>
                                // })
                            }

                        </div>
                    </div>
                </div>
                <Link to='/products-list' className='w3-button w3-black w3-round-large'>Back</Link>
            </div>
        )
    }
}

export default SingleProduct
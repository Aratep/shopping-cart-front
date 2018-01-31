import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import jwt from "jsonwebtoken";
import ReactLoading from 'react-loading';

import {getCartList, deleteFromCart} from '../../services/product-service';
import {userProducts, removeUserProd} from '../../actions/index';

class UserCart extends Component {
    componentDidMount() {
        this.userCartList();
    }

    userCartList = () => {
        const currentUserToken = localStorage.getItem('userToken');
        const {dispatch} = this.props;

        if (currentUserToken) {
            jwt.verify(currentUserToken, 'secret_key', (err, user) => {
                if (err) console.log(err);
                if (user) {
                    const user_id = user._id;

                    getCartList(JSON.stringify({user_id}))
                        .then(response => {
                            return response.json()
                        })
                        .then(body => {
                            //must be dispatch
                            dispatch(userProducts(body.userProduct))
                        })
                        .catch(err => {
                            console.log(err)
                        });
                }
            })
        }
    }

    removeSingleProd = (id) => {
        const {dispatch} = this.props;

        dispatch(removeUserProd(id))
    }

    deleteProdFromCart = (prod_id) => {
        const currentUserToken = localStorage.getItem('userToken');
        // const {dispatch} = this.props;
        // console.log(prod_id);

        jwt.verify(currentUserToken, 'secret_key', (err, user) => {
            if (err) console.log(err);
            if (user) {
                const user_id = user._id;

                deleteFromCart(JSON.stringify({user_id, prod_id}))
                    .then(response => {
                        return response.json()
                    })
                    .then(body => {
                        console.log(body)
                        //must be dispatch
                        // dispatch(removeUserProd(prod_id))
                    })
                    .catch(err => {
                        console.log(err)
                    });
            }
        })
        this.removeSingleProd(prod_id);
    }

    render() {
        const {userProducts} = this.props.userProducts;
        if (userProducts === undefined) {
            return <ReactLoading color='black'/>
        }
        // console.log(typeof userProducts);

        return (
            <div>
                {
                    userProducts.length <= 0 && <h2>Your Cart is Empty</h2>
                }
                {
                    userProducts.map((prod, index) => {
                        // console.log(prod);

                        return <div key={index} className='row'>
                            <h1>My Cart</h1>
                            <div className='column'>
                                <h2>{prod.name}</h2>
                                <img src={prod.imagePath} alt={prod.name} className='img-style'/>
                                <div><b>Price:</b> {prod.price}</div>
                                <div><b>Available Quantity:</b> {prod.available_quantity}</div>
                                <div><b>Status:</b> <b>{prod.status}</b></div>
                                <div><b>Product Description:</b> {prod.description}</div>
                            </div>
                            <a onClick={this.deleteProdFromCart.bind(this, prod._id)}
                               className='w3-button w3-red'>
                                remove
                            </a>
                        </div>
                    })
                }
                <Link to='/products-list'>Back</Link>
            </div>
        )
    }
}

export default UserCart
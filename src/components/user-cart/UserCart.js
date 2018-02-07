import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import jwt from "jsonwebtoken";
import ReactLoading from 'react-loading';

import {getCartList, deleteFromCart} from '../../services/product-service';
import {userProducts, removeUserProd} from '../../actions/index';
import {getToken} from "../../services/auth-service";

class UserCart extends Component {
    constructor() {
        super();

        this.state = {
            token: null
        }
    }
    componentDidMount() {
        // this.getApiToken();
        this.userCartList();
    }

    // getApiToken = () => {
    //     getToken()
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(body => {
    //             // console.log(body.token)
    //             this.setState({token: body.token})
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });
    // };


    userCartList = () => {
        const currentUserToken = localStorage.getItem('userToken');
        const token = this.state.token;

        const {dispatch} = this.props;

        if (currentUserToken) {
            jwt.verify(currentUserToken, 'secret_key', (err, user) => {
                if (err) console.log(err);

                if (user) {
                    const user_id = user.user._id;

                    getCartList(JSON.stringify({user_id}))
                        .then(response => {
                            return response.json()
                        })
                        .then(body => {
                            //must be dispatch
                            dispatch(userProducts(body.userProducts))
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

        jwt.verify(currentUserToken, 'secret_key', (err, user) => {
            if (err) console.log(err);
            if (user) {
                console.log(user.user)
                const user_id = user.user._id;

                deleteFromCart(JSON.stringify({user_id, prod_id}))
                    .then(response => {
                        return response.json()
                    })
                    .then(body => {
                        console.log(body)
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
            return <ReactLoading color='black' type='spokes' className="center"/>
        }
        console.log(this.props.userProducts);

        return (
            <div>
                {
                    userProducts.length <= 0 ? <h2>Your Cart is Empty</h2> : <h1>My Cart</h1>
                }
                {
                    userProducts.map((prod, index) => {
                        // console.log(prod);

                        return <div key={index} className='box'>

                            <div className=''>
                                <div>
                                    <h2>{prod.name}</h2>
                                    <div className=''>
                                        <img src={prod.imagePath} alt={prod.name} className='img-style'/>
                                        <div><b>Price:</b> {prod.price}</div>
                                        <div><b>Available Quantity:</b> {prod.available_quantity}</div>
                                        <div><b>Status:</b> <b>{prod.status}</b></div>
                                        {/*<div><b>Product Description:</b> {prod.description}</div>*/}
                                    </div>
                                </div>
                                <a onClick={this.deleteProdFromCart.bind(this, prod._id)}
                                   className='w3-button w3-red'>
                                    remove
                                </a>
                            </div>
                        </div>
                    })
                }
                <div className='after-box'>
                    <Link to='/products-list' className='w3-button w3-black w3-round-large'>Back</Link>
                </div>
            </div>
        )
    }
}

export default UserCart
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import jwt from "jsonwebtoken";

import {getAllProducts, getCartList} from '../../services/product-service';
import {userProducts} from '../../actions/index';

class UserAccount extends Component {
    componentDidMount() {
        this.userCartList();
        // this.getProductList();
    }

    getProductList = () => {

        getAllProducts()
            .then((response) => {
                return response.json();
            })
            .then(products => {
                console.log(products);
            })
            .catch((err) => {
                console.log(err)
            });
    };

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
                            console.log(body)
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

    render() {
        console.log(this.props)
        return (
            <div>

                <Link to='/products-list'>Back</Link>
            </div>
        )
    }
}

export default UserAccount
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {getAllProducts, getCartList} from '../../services/product-service';
import jwt from "jsonwebtoken";

class UserAccount extends Component {
    constructor() {
        super();

        this.state = {
            ids: [],
            variants: []
        }
    }

    componentDidMount() {
        this.userCartList();
        this.getProductList();
    }

    getProductList = () => {

        getAllProducts()
            .then((response) => {
                return response.json();
            })
            .then(products => {
                console.log(products);
                console.log(this.state.ids)
                // const product = body.products.filter(prod => prod._id === id);
                // const variants = products.variants.filter(variant => variant.prod_id === id);


            })
            .catch((err) => {
                console.log(err)
            });
    };

    userCartList = () => {
        const currentUserToken = localStorage.getItem('userToken');

        if (currentUserToken) {
            jwt.verify(currentUserToken, 'secret_key', (err, user) => {
                if (err) console.log(err);
                const user_id = user._id;

                getCartList(JSON.stringify({user_id}))
                    .then(response => {
                        return response.json()
                    })
                    .then(body => {
                        console.log(body)
                        this.setState({ids: body.ids})
                    })
                    .catch(err => {
                        console.log(err)
                    });
            })
        }
    }

    render() {
        return (
            <div>

                <Link to='/products-list'>Back</Link>
            </div>
        )
    }
}

export default UserAccount
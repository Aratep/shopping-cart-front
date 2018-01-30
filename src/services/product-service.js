// import React from 'react';
// import {withRouter} from 'react-router-dom';

import {
    POST,
    PUT,
    DELETE,
    HEADERS,
    GET,
    CREATE_PRODUCT_URL,
    UPDATE_PRODUCT_URL,
    DELETE_PRODUCT_URL,
    PRODUCTS_LIST_URL,
    ADMIN_LOGIN_URL,
    ADD_TO_CART_URL,
    GET_CART_LIST_URL
} from '../constants/constants';

// export const AuthButton =  withRouter(({history}) => (
//     <a className='pointer' onClick={() => {
//         localStorage.removeItem('_token');
//         return history.push('/login')
//     }}>Sign Out</a>
// ));

export const createProduct = (body) => {
    return fetch(CREATE_PRODUCT_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
};


export const deleteProduct = (body) => {
    return fetch(DELETE_PRODUCT_URL, {
        method: DELETE,
        headers: HEADERS,
        body: body
    })
};

export const adminLogin = (body) => {
    return fetch(ADMIN_LOGIN_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
};

export const updateItem = (body) => {
    return fetch(UPDATE_PRODUCT_URL, {
        method: PUT,
        headers: HEADERS,
        body: body
    })
}

export const addToCart = (body) => {
    return fetch(ADD_TO_CART_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
};

export const getCartList = (body) => {
    return fetch(GET_CART_LIST_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
};

// export const deleteUser = (body) => {
//     return fetch(DELETE_USER_URL, {
//         method: DELETE,
//         headers: HEADERS,
//         body: body
//     })
// }

export const getAllProducts = () => {
    return fetch(PRODUCTS_LIST_URL, {
        method: GET
    })
}

// export const getToken = () => {
//     return fetch(TOKEN_URL, {
//         method: GET
//     })
// }
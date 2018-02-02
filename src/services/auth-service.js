import React from 'react';
import {withRouter} from 'react-router-dom';

import {
    ALL_USERS_URL,
    POST,
    PUT,
    DELETE,
    HEADERS,
    REGISTER_URL,
    LOGIN_URL,
    RESET_PASSWD_URL,
    EDIT_USER_URL,
    GET,
    DELETE_USER_URL,
    TOKEN_URL,
    UPLOAD_FILE_URL,
    tokenToVerify
} from '../constants/constants';


export const AuthButton = withRouter(({history}) => (
    <span className='pointer text-decor' onClick={() => {
        localStorage.removeItem('userToken');
        return history.push('/login')
    }}>Sign Out</span>
));

export const registration = (body) => {
    return fetch(REGISTER_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
}

export const login = (body) => {
    return fetch(LOGIN_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
}

export const userDetails = (body) => {
    return fetch(LOGIN_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
}


export const updateUser = (body) => {
    return fetch(EDIT_USER_URL, {
        method: PUT,
        headers: HEADERS,
        body: body
    })
}

export const resetPassword = (body) => {
    return fetch(RESET_PASSWD_URL, {
        method: PUT,
        headers: HEADERS,
        body: body
    })
}

export const deleteUser = (body) => {
    return fetch(DELETE_USER_URL, {
        method: DELETE,
        headers: HEADERS,
        body: body
    })
}

export const getAllUsers = () => {
    return fetch(ALL_USERS_URL, {
        method: GET,
        headers: {'x-access-token': tokenToVerify}
    })
}

export const uploadFile = (body) => {
    return fetch(UPLOAD_FILE_URL, {
        method: POST,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': tokenToVerify
        },
        body: body
    })
}

export const getToken = () => {
    return fetch(TOKEN_URL, {
        method: GET
    })
}
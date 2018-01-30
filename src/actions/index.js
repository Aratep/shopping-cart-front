import {ALL_PRODUCTS, ADD_NEW_PRODUCT, REMOVE_PRODUCT, SINGLE_PRODUCT} from '../constants/constants';

let nextProdId = 0;
export const addProduct = product => {
    return {
        type: ADD_NEW_PRODUCT,
        id: nextProdId++,
        product
    }
}

export const allProducts = (products, variants, count) => {
    return {
        type: ALL_PRODUCTS,
        products,
        variants,
        count
    }
};

export const singleProduct = (product, prod_variants) => {
    return {
        type: SINGLE_PRODUCT,
        product,
        prod_variants
    }
};

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id
    }
}
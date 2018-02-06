// import {SINGLE_PRODUCT, REMOVE_PRODUCT} from '../constants/constants'
import {SINGLE_PRODUCT} from '../constants/constants'

const product = (state = [], action) => {
    switch (action.type) {
        case SINGLE_PRODUCT:
            return {...state,  product: action.product};
        // case REMOVE_PRODUCT:
        //     return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
        default:
            return state
    }
}



export default product
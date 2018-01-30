// import {SINGLE_PRODUCT, REMOVE_PRODUCT} from '../constants/constants'
import {USER_PRODUCTS} from '../constants/constants'

const userProducts = (state = [], action) => {
    switch (action.type) {
        case USER_PRODUCTS:
            return {...state,  userProd: action.userProd};
        // case REMOVE_PRODUCT:
        //     return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
        default:
            return state
    }
}



export default userProducts
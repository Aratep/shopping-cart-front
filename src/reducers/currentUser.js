import {CURRENT_USER} from '../constants/constants'

const currentUser = (state = [], action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {...state,  currentUser: action.currentUser};
        // case REMOVE_PRODUCT:
        //     return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
        default:
            return state
    }
}



export default currentUser
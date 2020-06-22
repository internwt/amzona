import {actionTypes} from './action/productListReducer'
function productListReducer(state = { productItems: [],loading:true}, action) {
    switch (action.type) {
        case actionTypes.PRODUCT_LIST_REQUEST:
            return {loading:true };
            case actionTypes.PRODUCT_LIST_SUCCESSS:
                return {
                    loading:false,
                    productItems : action.payload
                }
                case actionTypes.PRODUCT_LIST_FAILURE : 
                return { loading: false, error: action.payload.error}
                 default: 
                return  state
             
    }
}

export {productListReducer}